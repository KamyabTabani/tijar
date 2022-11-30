import "./header.scss";
import TopBar from "./topbar/topbar";
import Indicator from "../../ui/indicator/indicator";
import {useLocation} from "react-router-dom"

const Header = () => {
    let location = useLocation();

    const renderTitle = (url:string):JSX.Element => {
        if (url === "/about-us") {
            return (
                <div className="Page-Title">
                    <Indicator />
                    <h3 className="Title">درباره ما</h3>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    return(
        <div className="Header float-start">
            <div className="container">
                <TopBar />
                {renderTitle(location.pathname)}
            </div>
        </div>
    );
}

export default Header;