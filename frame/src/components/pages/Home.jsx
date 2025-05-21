import CardLayout from "../layouts/CardLayout";
import SectionContainer from "../layouts/SectionContainer";
import ProductCardWithProps from "../views/home/ProductCardWithProps";
// import TestimonialBox from "./components/views/home/TestimonialBox";
import CategoryFilter from "../views/home/CategoryFilter";
import CustomerReview from "../views/home/CustomerReview";
import ProductCarousel from "../views/home/ProductCarousel";
import ShoppingCart from "../views/home/ShoppingCart";

function App() {
  const products = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      price: 89.99,
      description: 'Premium sound quality with active noise cancellation',
      isNew: true,
      rating: 4,
      reviewCount: 142,
    },
    {
      id: 2,
      title: 'Wireless charger 33W',
      price: 59.99,
      description: 'Fast 33W wireless charger for quick, efficient device power-ups.',
      isNew: true,
      rating: 4.34,
      reviewCount: 99,
    },
    {
      id: 3,
      title: 'C-type cable',
      price: 9.99,
      description: 'Durable C-type cable for fast charging and reliable data transfer.',
      isNew: true,
      rating: 4.99,
      reviewCount: 76,
    },
  ];

  const testimonials = [
    {
      id: 1,
      author: 'John D.',
      rating: 5,
      date: '2 days ago',
      title: 'Excellent product!',
      content: 'This exceeded my expectations. The quality is amazing!',
      avatarInitials: 'JD',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <SectionContainer title="Featured Products">
        {products.map((product) => (
          <ProductCardWithProps key={product.id} {...product} />
        ))}
      </SectionContainer>

      <CardLayout
        title="Customer Reviews"
        footer={
          <div className="text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              See all reviews →
            </a>
          </div>
        }
      >
        {/* {testimonials.map((testimonial) => (
          <TestimonialBox key={testimonial.id} {...testimonial} />
        ))} */}
      <ProductCarousel />
      </CardLayout>

      <CategoryFilter />
      <CustomerReview />
      {/* <TestimonialBox/> */}
      <ShoppingCart />
    </div>
  );
}

export default App;