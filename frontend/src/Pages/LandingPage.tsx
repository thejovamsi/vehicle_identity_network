import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeatureCards from "../Components/FeautureCards";


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />  
      <main className="flex-col h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold underline">
          Landing page
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to the landing page of DriveID. Here you can find information about our product and services.
        </p>
      </main>
    </>
  );
}  