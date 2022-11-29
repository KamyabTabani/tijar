import "./footer.scss";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container Footer-Top">
                    <img src={require("../../assets/images/Footer-Top.png")} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="Footer-Bottom">
                <div className="container">
                    <div onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }} className="text-center Scroller">
                        <img src={require("../../assets/images/Scroll-Up.png")} alt="" className="img-fluid"/>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-12 my-4">
                            <div
                                className="d-flex flex-column align-items-lg-start align-items-md-start align-items-sm-center align-items-center justify-content-between">
                                <img src={require("../../assets/images/Logo.png")}
                                     className="img-fluid Footer-Logo pb-4" alt="logo"/>
                                <h5>با تیــجـــــار کسب و کارت رو فریاد بزن!</h5>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 my-4">
                            <h5 className="text-lg-end text-md-end text-sm-center text-center">درباره ما</h5>
                            <p className="text-lg-end text-md-end text-sm-center text-center">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
                                در شصت و سه درصد گذشته حال و آینده(ادامه مطلب)
                            </p>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-lg-row flex-md-column flex-column justify-content-lg-between justify-content-md-center justify-content-center align-items-center">
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="Social-Media d-flex justify-content-center align-items-center">
                                <img src={require("../../assets/images/Telegram.svg").default} alt=""
                                     className="img-fluid"/>
                            </div>
                            <div className="Social-Media d-flex justify-content-center align-items-center">
                                <img src={require("../../assets/images/Whatsapp.svg").default} alt=""
                                     className="img-fluid"/>
                            </div>
                            <div className="Social-Media d-flex justify-content-center align-items-center">
                                <img src={require("../../assets/images/Instagram.svg").default} alt=""
                                     className="img-fluid"/>
                            </div>
                        </div>
                        <div className="Divider mb-3"></div>
                        <div className=" mb-3">
                            <span className="Copy-Right">© 2022 TIJAR All Rights Reserved </span>
                        </div>
                    </div>
                    <div className="row Footer-Links mt-3">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 text-lg-end text-md-end text-sm-center text-center">
                            <h5>اطلاعات تماس:</h5>
                            <h6>ایمیل: info@Tijar.me</h6>
                            <h6>تلفن: ۰۲۱77889907</h6>
                            <h6>واتساپ: 09126687912</h6>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 text-lg-end text-md-end text-sm-center text-center">
                            <h5>ساعات کاری:</h5>
                            <h6> شنبه تا چهارشنبه ۸ الی ۱۸</h6>
                            <h6>پنجشنبه ها ۸ الی ۱۴</h6>
                            <h6>جمعه و تعطیلات رسمی ؛ تیجار تعطیل می باشد</h6>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 text-lg-end text-md-end text-sm-center text-center">
                            <h5>دسترسی سریع:</h5>
                            <a href="#" className="nav-link">فروشگاه</a>
                            <a href="#" className="nav-link">حساب کاربری</a>
                            <a href="#" className="nav-link">درباره ما</a>
                            <a href="#" className="nav-link">تماس با ما</a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={require("../../assets/images/Footer-Pic-2.png")} alt="" className="img-fluid" style={{width: "80px"}}/>
                                <img src={require("../../assets/images/Footer-Pic-1.png")} alt="" className="img-fluid" style={{width: "80px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;