import "./header.scss";
import TopBar from "./topbar/topbar";
import Indicator from "../../ui/indicator/indicator";

const Header = () => {
    return(
        <div className="Header float-start">
            <div className="container">
                <TopBar />
                <div className="Page-Title">
                    <Indicator />
                    <h3 className="Title">درباره ما</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;