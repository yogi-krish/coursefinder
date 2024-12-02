import airc from "../../assets/png/airc.png";
import bc from "../../assets/png/bc.png";
import starGroup from "../../assets/png/starGroup.png";
import rightArrow from "../../assets/svg/arrow_right.svg";
import "./LatestUpdates.scss";

const HiringCard = () => {
    const isMobile = window.innerWidth < 990;
    return (
        <div className="hiring-card">
            <div className="hiring-card_content">
                <text className="hiring-card_content_title">We’re Hiring!</text>
                <text className="hiring-card_content_description">KC continues recruitments for its{!isMobile && <br/>} offices across India and Asia{!isMobile && <br/>} even during the unprecedented{!isMobile && <br/>} times of Covid.</text>
            </div>
            <button className="hiring-card_button">Apply now</button>
        </div>
    );
};

const UpdateCard = ({id, image, name, certificateName, validity}:any) => {

    return (
        <div className="info" key={id}>
            <div className="info_image">{image}</div>
            <text className="info_name">{name}</text>
            <img src={starGroup} alt="stars"/>
            <text className="info_certificatename">{certificateName}</text>
            <text className="info_validity">{validity}</text>
        </div>
    );
};

const cardInfo = [
    {
        id: 1,
        image: <img src={airc} alt="airc" style={{
            width: "120px",
            height: "120px",
        }}/>,
        name: `American International Recruitment Council`,
        certificateName: "Certified Agents",
        validity: "October 2018 - 2028"
    },
    {
        id: 2,
        image: <img src={bc} alt="bc" style={{
            width: "180px",
            height: "59.06px"
        }}/>,
        name: "The British Council",
        certificateName: "Advanced Agent Certificate",
        validity: "August 2016 - 2018"
    }
]

const LatestUpdates = () => {

    return (
        <div className="updates">
            <h2 className="updates_title">Latest KC Updates</h2>
            <div className="updates_body">
                <HiringCard/>
                {cardInfo.map((info) => (
                    <UpdateCard {...info}/>
                ))}
            </div>
            <div className="updates_btn">
                More News
                <img src={rightArrow} alt=">" height={"10px"}/>
            </div>
        </div>
    );
};

export default LatestUpdates;
