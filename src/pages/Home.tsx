import { useState } from "react";
import DreamUniversityCarousel from "../components/DreamUniversityCarousel";
import Header from "../components/Header";
import ProvidedServices from "../components/ProvidedServices";
import TestimonialCarousel from "../components/TestimonialCarousel";
import SubHeader from "../components/SubHeader";
import LatestUpdates from "../components/LatestUpdates";
import Footer from "../components/Footer";
import Events from "../components/Events";
import SideBar from "../components/SideBar";
import Carousel from "../components/Carousel";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className="app">
            <SideBar isSidebarOpen={isSidebarOpen}/>
            <div className="content">
                <div
                    style={{
                        overflowX: "unset",
                    }}
                >
                    <Header onHamClick={toggleSidebar}/>
                    <SubHeader />
                    <ProvidedServices />
                    <DreamUniversityCarousel/>
                    <Events />
                    <TestimonialCarousel />
                    {/* <Carousel/> */}
                    <LatestUpdates />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
