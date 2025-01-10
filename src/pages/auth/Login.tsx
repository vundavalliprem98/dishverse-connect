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
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          console.error("Error checking initial session:", sessionError);
          return;
        }

        if (session?.user) {
          await handleUserAuthentication(session.user.id);
        }

        // Set up auth state change listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            console.log("Auth state changed:", event, session?.user?.id);

            if (event === "SIGNED_IN" && session?.user) {
              await handleUserAuthentication(session.user.id);
            } else if (event === "SIGNED_OUT") {
              setError(null);
            }
          }
        );

        authSubscription = subscription;
      } catch (error) {
        console.error("Error in auth setup:", error);
        setError("Failed to initialize authentication");
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

  const handleUserAuthentication = async (userId: string) => {
    try {
      console.log("Fetching user profile for:", userId);
      
      // Use single query to get profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .maybeSingle();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
        throw profileError;
      }

      if (!profile) {
        console.error("No profile found for user:", userId);
        throw new Error("User profile not found");
      }

      console.log("User profile fetched:", profile);

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
      console.error("Error in user authentication:", error);
      
      let errorMessage = "Failed to authenticate user";
      if (error instanceof AuthError) {
        errorMessage = error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      toast({
        title: "Authentication Error",
        description: errorMessage,
        variant: "destructive",
      });
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