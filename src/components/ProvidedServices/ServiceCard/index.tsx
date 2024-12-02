import { IProvidedServices } from "../../../types/models";
import "./ServiceCard.scss";

const ServiceCard = ({id, title, icon}:IProvidedServices) => {

    return (
        <div className="service-card" key={id}>
            <img className="service-card_icon" src={icon} alt="icon"/>
            <text className="service-card_title">{title}</text>
        </div>
    );
};

export default ServiceCard;
