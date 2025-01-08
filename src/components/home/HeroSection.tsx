import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative h-[500px] -mx-4 -mt-8">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
        alt="Catering event setup"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
    <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Your Personalized Culinary Experience Awaits!
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Connect with skilled chefs for your special events and catering needs
      </p>
      <Link to="/customer/menu">
        <Button size="lg" className="bg-customer-primary hover:bg-customer-primary/90">
          Explore Menu
        </Button>
      </Link>
    </div>
  </section>
);

export default HeroSection;