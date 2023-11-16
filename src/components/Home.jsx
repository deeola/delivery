
import ReviewSlider from "../components/Home/ReviewSlider/ReviewSlider";
import FAQ from "../components/Home/FAQ/FAQ";
import Footer from "./Shared/Footer/Footer";
import Hero from "./Home/Hero/Hero";
import WhyChooseUs from "./Home/WhyChooseUs/WhyChooseUs";
import Advisors from "./Home/Advisors/Advisors";
import HowItWorks from "./Home/HowItWorks/HowItWorks";
import Download from "./Home/Download/Download";
import Pricing from "./Home/Pricing/Pricing";

function Home() {


  return (
    <>
      <Hero />
       <WhyChooseUs /> 
      <Advisors />
    <HowItWorks /> 
       <Download/> 
       <Pricing /> 
      <div id="reviewSlider">
        <ReviewSlider />
      </div> 
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
