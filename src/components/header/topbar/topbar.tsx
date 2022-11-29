import "./topbar.scss";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import SideDraw from "../../../ui/sidedraw/sidedraw";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <SideDraw open={open} close={() => setOpen(!open)}/>
            <div className="TopBar">
                <div className="d-flex flex-lg-row flex-md-column flex-md-column justify-content-lg-between justify-content-md-center justify-content-sm-between justify-content-between align-items-center">
                    <button onClick={() => setOpen(true)} className="Search-Box D-Mobile-Show me-2">
                        <MenuIcon fontSize={"medium"}/>
                    </button>
                    <Link className="navbar-brand ms-2" to="/">
                        <img src={require("../../../assets/images/Logo.png")} alt="Logo" className="img-fluid Logo"/>
                    </Link>
                    <div className="Menu mt-lg-0 mt-md-3 mt-3 D-Mobile-None">
                        <NavLink className="nav-link" to="/">صفحه اصلی</NavLink>
                        <NavLink className="nav-link" to="/services">خدمات ما</NavLink>
                        <NavLink className="nav-link" to="/panel-demo">دموی پنل</NavLink>
                        <NavLink className="nav-link" to="/articles">مقالات</NavLink>
                        <NavLink className="nav-link" to="/about-us">درباره ما</NavLink>
                        <NavLink className="nav-link" to="/contact-us">تماس با ما</NavLink>
                    </div>
                    <div className="User-Option d-flex justify-content-center align-items-center mt-lg-0 mt-md-3 mt-3 D-Mobile-None">
                        <button className="Search-Box ms-2">
                            <SearchIcon fontSize={"medium"}/>
                        </button>
                        <NavLink className="nav-link" to="/login">ورود و ثبت نام</NavLink>
                    </div>
                </div>
                <div className="D-Mobile-Flex justify-content-center align-content-center px-3 mt-4">
                    <input type="search" placeholder="جست و جو کنید . . ." name="search" id="search" className="form-control Search-Input"/>
                    <button className="Search-BTN"><SearchIcon /></button>
                </div>
            </div>

        </>
    );
}

export default TopBar;