import building1 from "../../assets/png/building1.png";
import building2 from "../../assets/png/building2.png";
import building3 from "../../assets/png/building3.png";
import rightArrow from "../../assets/svg/arrow_right.svg";
import "./Events.scss";

const Button = ({title}:any) => {
    return (
        <div className="register-btn">
            {title}
            <img src={rightArrow} alt=">" height={"10px"}/>
        </div>
    );
}

const Events = () => {

    return (
        <div className="events">
            <h2 className="events_title">Webinars & Events</h2>
            <div className="events_box">
                <div className="event1">
                    <img className="event1_image" src={building1} alt="image"/>
                    <div className="event1_content">
                        <text className="event1_content_time">Mar 19 · 05:00 PM to 07:30 PM</text>
                        <text className="event1_content_title">USA Vertual Addmission Day</text>
                        <text className="event1_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
                        <Button title={"Register Now"}/>
                    </div>
                </div>
                <div className="event23">
                    <div className="event">
                        <img className="event_image" src={building2} alt="image"/>
                        <div className="event_content">
                            <text className="event_content_time">May 18 - May 21  · 04:30 PM to 06:30 PM</text>
                            <text className="event_content_title">New Zealand Virtual Admissions Week</text>
                            <text className="event_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...</text>
                            <Button title={"Register Now"}/>
                        </div>
                    </div>
                    <div className="event">
                        <img className="event_image" src={building2} alt="image"/>
                        <div className="event_content">
                            <text className="event_content_time">May 24 - May 28  · 04:00 PM to 06:00 PM</text>
                            <text className="event_content_title">UK Virtual Admissions Week</text>
                            <text className="event_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...</text>
                            <Button title={"Register Now"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="events_mobile">
                <div className="event1">
                    <img className="event1_image" src={building1} alt="image"/>
                    <div className="event1_content">
                        <text className="event1_content_time">Mar 19 · 05:00 PM to 07:30 PM</text>
                        <text className="event1_content_title">USA Vertual Addmission Day</text>
                        <text className="event1_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
                        <Button title={"Register Now"}/>
                    </div>
                </div>
                <div className="event1">
                    <img className="event1_image" src={building2} alt="image"/>
                    <div className="event1_content">
                        <text className="event1_content_time">May 18 - May 21  · 04:30 PM to 06:30 PM</text>
                        <text className="event1_content_title">New Zealand Virtual Admissions Week</text>
                        <text className="event1_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...</text>
                        <Button title={"Register Now"}/>
                    </div>
                </div>
                <div className="event1">
                    <img className="event1_image" src={building2} alt="image"/>
                    <div className="event1_content">
                        <text className="event1_content_time">May 24 - May 28  · 04:00 PM to 06:00 PM</text>
                        <text className="event1_content_title">UK Virtual Admissions Week</text>
                        <text className="event1_content_desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...</text>
                        <Button title={"Register Now"}/>
                    </div>
                </div>
            </div>
            <Button title={"See More"}/>
        </div>
    );
};

export default Events;
