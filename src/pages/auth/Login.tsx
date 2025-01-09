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
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event, session);
        
        if (event === "SIGNED_IN" && session?.user) {
          try {
            console.log("Fetching user profile for:", session.user.id);
            const { data: profile, error: profileError } = await supabase
              .from("profiles")
              .select("role")
              .eq("id", session.user.id)
              .single();

            if (profileError) {
              console.error("Error fetching profile:", profileError);
              setError("Failed to fetch user profile");
              return;
            }

            console.log("User profile fetched:", profile);
            if (profile) {
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
            }
          } catch (error) {
            console.error("Error in auth state change:", error);
            if (error instanceof AuthError) {
              setError(error.message);
            }
          }
        } else if (event === "SIGNED_OUT") {
          setError(null);
        }
      }
    );

    // Check if user is already signed in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        console.log("User already signed in:", session.user);
        // Let the auth state change handler handle the redirect
      }
    };

    checkUser();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

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