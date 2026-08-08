import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeatureCards from "../Components/FeautureCards";
import Product from "../Components/Product"
import AnimatedSky from "../Components/ui/AnimatedSky";
import Footer from "../Components/Footer";
import PricingPage from "../Pages/PricingPage"



export default function LandingPage() {
  return (
     <div className="relative">
      <AnimatedSky />
       <div className="relative z-10">
        <main>
      <Navbar />
      <Hero />
      <FeatureCards />
      <Product />
      <PricingPage />
      <Footer/>

      </main>
      </div>
      </div>
  );
}  