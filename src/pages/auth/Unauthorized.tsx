import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { userRole } = useAuth();

  const handleRedirect = () => {
    switch (userRole) {
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
        navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow text-center">
        <h1 className="text-2xl font-bold text-gray-900">Unauthorized Access</h1>
        <p className="text-gray-600">
          You don't have permission to access this page.
        </p>
        <Button onClick={handleRedirect} className="w-full">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;