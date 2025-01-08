import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FoodCategories from "@/components/home/FoodCategories";

const CustomerHome = () => {
  return (
    <div className="space-y-16 mb-8">
      <HeroSection />
      <FeaturesSection />
      <FoodCategories />
      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 -mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Flavours From Home</h3>
              <p className="text-gray-400">Where Every Meal Tells a Story!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400">
                Follow us on social media for updates and culinary inspiration.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerHome;