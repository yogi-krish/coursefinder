import DreamUniversityCarousel from "../components/DreamUniversityCarousel";
import Header from "../components/Header";
import MultiStepSlider from "../components/MultiStepSlider";
import ProvidedServices from "../components/ProvidedServices";
import TestimonialCarousel from "../components/TestimonialCarousel";
import SubHeader from "../components/SubHeader";
import LatestUpdates from "../components/LatestUpdates";
import Footer from "../components/Footer";
import Events from "../components/Events";

const Home = () => {

    return (
        <div style={{
            overflowX: "unset"
        }}>
          <Header/>
          <SubHeader/>
          <ProvidedServices/>
          <Events/>
          <TestimonialCarousel/>
          <LatestUpdates/>
          <Footer/>
          {/* <DreamUniversityCarousel/> */}
        </div>
      
    );
};

export default Home;