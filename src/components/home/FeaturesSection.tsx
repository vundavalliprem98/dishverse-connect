import { Calendar } from "lucide-react";

const FeaturesSection = () => (
  <section className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
    <div className="grid md:grid-cols-1 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-customer-primary/10 rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-customer-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Custom Catering for Events</h3>
        <p className="text-gray-600">
          Perfect for parties, weddings, and special gatherings. Let our chefs create
          memorable dining experiences.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;