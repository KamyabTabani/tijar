import "../styles/aboutus.scss";
import PropertyCard, {IPropertyCard} from "../../ui/propertycard/propertycard";
import Indicator from "../../ui/indicator/indicator";
import MemberCard, {IMemberCard} from "../../ui/membercard/membercard";
import CommentCard, {ICommentCard} from "../../ui/commentcard/commentcard";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "../../ui/slider/slider";
import {useRef} from "react";
import {SwiperRef} from "swiper/react";

const AboutUs = () => {

    const sliderRef = useRef<SwiperRef>(null);

    const propertyItems: IPropertyCard[] = [
        {
            header: "167",
            body: "پروژه در حال اجرا",
            footer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از "
        },
        {
            header: "%99",
            body: "رضایت مشتریان ما",
            footer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از "
        },
        {
            header: "1200+",
            body: "پروژه اجرا شده",
            footer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از "
        }
    ]

    const memberItems: IMemberCard[] = [
        {
            img: require("../../assets/images/Person1.png"),
            name: "محمد مهدی صادقی",
            role: "مدیرعامل"
        },
        {
            img: require("../../assets/images/Person2.png"),
            name: "محمد مهدی صادقی",
            role: "مدیرعامل"
        },
        {
            img: require("../../assets/images/Person3.png"),
            name: "محمد مهدی صادقی",
            role: "مدیرعامل"
        }
    ]

    const commentItems: ICommentCard[] = [
        {
            img: require("../../assets/images/Avatar2.png"),
            name: "محمد قربانی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
        {
            img: require("../../assets/images/Avatar1.png"),
            name: "علی رضایی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
        {
            img: require("../../assets/images/Avatar2.png"),
            name: "محمد قربانی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
        {
            img: require("../../assets/images/Avatar1.png"),
            name: "علی رضایی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
        {
            img: require("../../assets/images/Avatar2.png"),
            name: "محمد قربانی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
        {
            img: require("../../assets/images/Avatar1.png"),
            name: "علی رضایی",
            time: "دو هفته پیش",
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        },
    ]

    let allCommentItems: JSX.Element[] = [];
    const renderCommentItems = (comments:ICommentCard[]): JSX.Element[] => {
        comments.map((comment, index) => {
            allCommentItems.push(
                <CommentCard key={index} img={comment.img} name={comment.name} time={comment.time}
                             comment={comment.comment}/>
            )
            return;
        })
        return allCommentItems;
    }

    return (
        <div className="About-Us">
            <div className="container">
                <h4 className="text-lg-end text-md-end text-sm-center text-center mb-4">با تیجار به <span
                    className="red-text">هدفتون</span> برسید</h4>
                <p className="text-lg-end text-md-end text-sm-center text-center mb-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی نرم افزارها شناخت بیشتری
                    را
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                    برای شرایط فعلی نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی لورم
                    ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی نرم افزارها شناخت بیشتری را برای
                    طراحان
                    رایانه ای علی الخصوص طراحان خلاقی
                </p>
                <div className="row">
                    {
                        propertyItems.map((item, index) => {
                            return <PropertyCard key={index} header={item.header} body={item.body}
                                                 footer={item.footer}/>
                        })
                    }
                </div>
            </div>
            <div className="Team-Member">
                <div className="container">
                    <div className="d-flex justify-content-start mb-5">
                        <Indicator/>
                        <h3 className="Title">تیم ما</h3>
                    </div>
                    <div className="row">
                        {
                            memberItems.map((item, index) => {
                                return <MemberCard key={index} img={item.img} name={item.name} role={item.role}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="Comments">
                <div className="container">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start">
                            <Indicator/>
                            <h3><span className="red-text">نظرات</span> مشتریان ما</h3>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div onClick={() => {
                                sliderRef?.current?.swiper.slidePrev();
                            }} className="Arrow">
                                <ArrowForwardIosIcon/>
                            </div>
                            <div onClick={() => {
                                sliderRef?.current?.swiper.slideNext()
                            }} className="Arrow">
                                <ArrowBackIosIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <Slider sliderItems={renderCommentItems(commentItems)} desktopCount={2} tabletCount={1} mobileCount={1} reference={sliderRef}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;