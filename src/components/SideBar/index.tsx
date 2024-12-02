import { Link } from "react-router-dom";
import { navigations } from "../Header";
import "./SideBar.scss";

const SideBar = ({isSidebarOpen}:any) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <ul>
                {navigations.map((item) => (
                    <li key={item.id}>
                        <Link className="nav-link" to={item.link}>{item.title}</Link>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default SideBar;
