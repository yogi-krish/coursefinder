import { Link } from "react-router-dom";
import kcLogo from "../../assets/svg/kc_logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import { Navigations } from "../../navigations";
import "./Header.scss";

const navigations = [
    {
        id: 1,
        title: "Study Destination",
        link: Navigations.studies,
    },
    {
        id: 2,
        title: "Services",
        link: Navigations.services,
    },
    {
        id: 3,
        title: "Company",
        link: Navigations.about,
    },
    {
        id: 4,
        title: "Upcoming Events",
        link: Navigations.upcoming_events,
    },
    {
        id: 5,
        title: "Course Finder",
        link: Navigations.course_finder,
    },
];

const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <img className="logo" src={kcLogo} alt="ks overseas" />
                <nav>
                    <ul className="nav-list">
                        {navigations.map((item) => (
                            <li key={item.id}>
                                <Link className={`nav-link ${item.id === 5 ? 'btn' : ''}`} to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <img className="hamburger" src={hamburger} alt="-"/>
            </div>
        </div>
    );
};

export default Header;
