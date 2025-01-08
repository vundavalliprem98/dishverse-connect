import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const cuisines = [
  { name: "Wedding Catering", image: "wedding-catering" },
  { name: "Corporate Events", image: "corporate-events" },
  { name: "Birthday Parties", image: "birthday-parties" },
  { name: "Social Gatherings", image: "social-gatherings" },
];

const FoodCategories = () => (
  <section className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Event Catering Services</h2>
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {cuisines.map((cuisine) => (
          <CarouselItem key={cuisine.name} className="md:basis-1/3">
            <div className="p-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://source.unsplash.com/400x300/?${cuisine.image}`}
                  alt={cuisine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cuisine.name}</h3>
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
);

export default FoodCategories;