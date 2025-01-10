import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@supabase/supabase-js";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Setting up auth state change listener");
    let authSubscription: { unsubscribe: () => void } | null = null;

    const setupAuthListener = async () => {
      try {
        // Check initial session
        const { data: { session } } = await supabase.auth.getSession();
        console.log("Initial session check:", session?.user?.id);

        if (session?.user) {
          await handleUserAuthentication(session.user.id);
        }

        // Set up auth state change listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            console.log("Auth state changed:", event, session?.user?.id);

            if (event === "SIGNED_IN" && session?.user) {
              // Add delay to ensure profile is created
              setTimeout(async () => {
                await handleUserAuthentication(session.user.id);
              }, 1000);
            } else if (event === "SIGNED_OUT") {
              setError(null);
            }
          }
        );

        authSubscription = subscription;
      } catch (error) {
        console.error("Error in auth setup:", error);
        handleError(error);
      }
    };

    setupAuthListener();

    return () => {
      if (authSubscription) {
        console.log("Cleaning up auth listener");
        authSubscription.unsubscribe();
      }
    };
  }, [navigate]);

  const handleError = (error: unknown) => {
    console.error("Authentication error:", error);
    let message = "An unexpected error occurred";
    
    if (error instanceof AuthError) {
      message = error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }
    
    setError(message);
    toast({
      title: "Authentication Error",
      description: message,
      variant: "destructive",
    });
  };

  const handleUserAuthentication = async (userId: string) => {
    try {
      console.log("Fetching user profile for:", userId);
      
      // Retry mechanism for profile fetch
      let retries = 3;
      let profile = null;
      let profileError = null;

      while (retries > 0 && !profile) {
        const result = await supabase
          .from("profiles")
          .select("role")
          .eq("id", userId)
          .maybeSingle();

        if (result.error) {
          profileError = result.error;
          console.log(`Retry attempt ${4 - retries} failed:`, result.error);
          retries--;
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else if (result.data) {
          profile = result.data;
          break;
        } else {
          retries--;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      if (!profile) {
        throw profileError || new Error("Failed to fetch user profile after multiple attempts");
      }

      console.log("User profile fetched successfully:", profile);

      // Clear any existing errors
      setError(null);

      // Redirect based on role
      switch (profile.role) {
        case "admin":
          navigate("/admin");
          break;
        case "chef":
          navigate("/chef");
          break;
        case "customer":
        default:
          navigate("/customer");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            style: {
              button: { background: 'rgb(59 130 246)', color: 'white' },
              anchor: { color: 'rgb(59 130 246)' },
              input: { borderRadius: '0.375rem' },
              message: { color: 'rgb(239 68 68)' }
            },
            variables: {
              default: {
                colors: {
                  brand: 'rgb(59 130 246)',
                  brandAccent: 'rgb(29 78 216)'
                }
              }
            }
          }}
          providers={[]}
          redirectTo={`${window.location.origin}/auth/callback`}
          view="sign_in"
          magicLink={false}
          showLinks={true}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email address',
                password_label: 'Password',
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Login;