import union from "../../assets/svg/union.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="footer_title">Stay updated with KC Overseas</h2>
            <div className="footer_inputs">
                <input className="footer_inputs_text" type="text" placeholder="Email ID" />
                <select className="footer_inputs_select" aria-placeholder="I’m Interested in">
                    <option>I’m Interested in</option>
                    <option>Student</option>
                    <option>Institute</option>
                    <option>Partner</option>
                </select>
                <button className="footer_inputs_btn">Subscribe Now</button>
            </div>
            <img className="footer_union" src={union} alt="icon"/>
        </div>
    );
};

export default Footer;
