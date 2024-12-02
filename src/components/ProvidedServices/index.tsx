import locationIcon from "../../assets/svg/locationIcon.svg";
import circleStarIcon from "../../assets/svg/circleStarIcon.svg";
import fingerIcon from "../../assets/svg/fingerIcon.svg";
import certificateIcon from "../../assets/svg/certificateIcon.svg";
import consultImage from "../../assets/png/consultImage.png";
import "./ProvidedServices.scss";
import ServiceCard from "./ServiceCard";
import { IProvidedServices } from "../../types/models";

const servicesInfo: IProvidedServices[] = [
    {
        id: 1,
        title: "Test Preparing & Coaching",
        icon: fingerIcon,
    },
    {
        id: 2,
        title: "Course, Country & University Selection",
        icon: locationIcon,
    },
    {
        id: 3,
        title: "Application Assistance",
        icon: certificateIcon,
    },
    {
        id: 4,
        title: "Scholarships",
        icon: circleStarIcon,
    },
];

const ProvidedServices = () => {
    const isMobile = window.innerWidth < 768;
    return (
        <div className="services">
            <h2 className="services_title">Services we provide</h2>
            <div className="services_container">
                {servicesInfo.map((service) => (
                    <ServiceCard {...service} />
                ))}
            </div>
            <button className="btn">Enquire Now</button>
            <div className="consultation">
                <img className="consultation_image" src={consultImage} alt="consultation" />
                <div className="consultation_details">
                    <h3>Realize your global ambitions with us</h3>
                    <p>
                        With a keen ear for your choices and preferences, our counselling
                        {!isMobile && <br />} experience is so seamless that you will land in your dream
                        {!isMobile && <br />} university even before you do!
                    </p>
                    <ul className="list">
                        <li className="list_item" key={0}>Virtual & In Person Coaching and Counselling</li>
                        <li className="list_item" key={1}>Comprehensive Assistance for Applications, Admissions & Visas</li>
                        <li className="list_item" key={2}>High Value Scholarships and Study Loans</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProvidedServices;
