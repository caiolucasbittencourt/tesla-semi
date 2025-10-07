import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SpecsSection from "./components/SpecsSection";
import FeaturesSection from "./components/FeaturesSection";
import InteriorSection from "./components/InteriorSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SpecsSection />
        <FeaturesSection />
        <InteriorSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
