import { Search, ChefHat, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerHome = () => {
  return (
    <div className="space-y-16 mb-8">
      {/* Hero Section */}
      <section className="relative h-[500px] -mx-4 -mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
            alt="Chef preparing food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Personalized Culinary Experience Awaits!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Connect with skilled chefs for your daily meals and special events
          </p>
          <Button size="lg" className="bg-customer-primary hover:bg-customer-primary/90">
            Find a Chef
          </Button>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-customer-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-customer-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Everyday Dining Needs</h3>
            <p className="text-gray-600">
              Enjoy personalized meal options for your daily home-cooked meals, prepared by
              skilled chefs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 -mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Submit Requirements",
                description: "Tell us about your food preferences or event details",
              },
              {
                step: 2,
                title: "Compare Quotes",
                description: "Receive and compare personalized chef quotes",
              },
              {
                step: 3,
                title: "Enjoy Your Meal",
                description: "Confirm your chef and enjoy a delicious experience",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-customer-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Cuisines</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[
              "Italian",
              "Indian",
              "Chinese",
              "Mexican",
              "Japanese",
              "Mediterranean",
            ].map((cuisine) => (
              <CarouselItem key={cuisine} className="md:basis-1/3">
                <div className="p-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`https://source.unsplash.com/400x300/?${cuisine.toLowerCase()}-food`}
                      alt={cuisine}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{cuisine}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 -mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                event: "Wedding Reception",
                quote: "The chef created an amazing menu that impressed all our guests!",
              },
              {
                name: "Michael Chen",
                event: "Family Dinner",
                quote: "Perfect for busy professionals who want quality home-cooked meals.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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