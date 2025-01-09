import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@supabase/supabase-js";

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
              toast({
                title: "Error",
                description: "Failed to fetch user profile",
                variant: "destructive",
              });
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
                  navigate("/customer");
                  break;
                default:
                  navigate("/customer");
              }
            }
          } catch (error) {
            console.error("Error in auth state change:", error);
            if (error instanceof AuthError) {
              const errorMessage = error.message;
              setError(errorMessage);
              toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
              });
            }
          }
        } else if (event === "SIGNED_OUT") {
          setError(null);
        }
      }
    );

    return () => {
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
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo={window.location.origin}
        />
      </div>
    </div>
  );
};

export default Login;