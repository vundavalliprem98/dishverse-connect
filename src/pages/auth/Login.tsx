import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Setting up auth state change listener");
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event, session?.user?.id);

        if (event === "SIGNED_IN" && session?.user) {
          setIsLoading(true);
          setError(null);
          
          try {
            console.log("Fetching user profile for:", session.user.id);
            const { data: profile, error: profileError } = await supabase
              .from("profiles")
              .select("role")
              .eq("id", session.user.id)
              .single();

            if (profileError) {
              console.error("Error fetching profile:", profileError);
              throw new Error("Failed to fetch user profile. Please try again.");
            }

            if (!profile) {
              console.error("No profile found for user:", session.user.id);
              throw new Error("User profile not found. Please contact support.");
            }

            console.log("User profile fetched successfully:", profile);

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

            toast({
              title: "Welcome back!",
              description: "You have successfully signed in.",
            });
          } catch (error) {
            console.error("Error during authentication:", error);
            let message = "An unexpected error occurred";
            if (error instanceof Error) {
              message = error.message;
            }
            setError(message);
            toast({
              title: "Authentication Error",
              description: message,
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        } else if (event === "SIGNED_OUT") {
          setError(null);
          setIsLoading(false);
        }
      }
    );

    return () => {
      console.log("Cleaning up auth listener");
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

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
          {isLoading && (
            <Alert className="mt-4">
              <AlertDescription>Signing you in...</AlertDescription>
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
          redirectTo={window.location.origin}
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