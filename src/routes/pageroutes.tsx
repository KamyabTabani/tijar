import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "../components/header/header";
import AboutUs from "../pages/components/aboutus";
import App from "../App";
import Footer from "../components/footer/footer";

const PageRoutes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/about-us"} element={<AboutUs />}></Route>
                <Route path={"/"} element={<App />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default PageRoutes;