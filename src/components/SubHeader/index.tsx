import arrowDown from "../../assets/svg/arrow_down_rounded.svg";
import star1 from "../../assets/svg/star_1.svg";
import star2 from "../../assets/svg/star_2.svg";
import dot from "../../assets/svg/dot.svg";
import circle from "../../assets/svg/circle.svg";
import "./SubHeader.scss";

const SubHeader = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <div className="sub-header">
                <div className="branch-details">
                    <text className="branch-details_text1">Home</text>
                    <text className="branch-details_text2">Pune Branch</text>
                </div>
                <h1>KC Overseas Education</h1>
                <h1 className="city">Pune<span className="box"></span></h1>
                <p>We value your career aspirations, which is why we map your preferences with the best that{!isMobile && <br/>} our global universities have to offer. Thousands of our students are pursuing their programs{!isMobile && <br/>} and aspirations in eminent universities globally and we welcome you to pursue yours!</p>
                <div className="button-group">
                    <button className="btn">Enquire Now</button>
                    <div className="btn2">
                        <img className="icon" src={arrowDown} alt="icon"/>
                        <text className="txt">Branch Address</text>
                    </div>
                    
                </div>
                <img className="star1" src={star1}/>
                <img className="star2" src={star2}/>
                <img className="star3" src={star1}/>
                <img className="circle" src={circle}/>
                <img className="dot1" src={dot}/>
                <img className="dot2" src={dot}/>
            </div>
        </>
    );
};

export default SubHeader;
