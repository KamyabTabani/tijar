import "./sidedraw.scss";
import BackDrop from "../backdrop/backdrop";
import React from "react";
import {Link, NavLink} from "react-router-dom";

interface ISideDraw {
    open: boolean;
    close: () => void;
}

const SideDraw = ({open, close}: ISideDraw) => {
    let attachedClasses = ["SideDraw", "Close"];
    if (open) {
        attachedClasses = ["SideDraw", "Open"];
    }
    return (
        <>
            <BackDrop close={close} show={open}/>
            <div className={attachedClasses.join(" ")}>
                <Link className="mx-auto" to="/">
                    <img src={require("../../assets/images/Logo.png")} alt="Logo" className="img-fluid Logo"/>
                </Link>
                <div className="d-flex justify-content-end align-items-center flex-column mt-5">
                    <NavLink onClick={close} className="nav-link" to="/">صفحه اصلی</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/services">خدمات ما</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/panel-demo">دموی پنل</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/articles">مقالات</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/about-us">درباره ما</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/contact-us">تماس با ما</NavLink>
                    <NavLink onClick={close} className="nav-link" to="/login">ورود و ثبت نام</NavLink>
                </div>
            </div>
        </>
    );
}

export default SideDraw;