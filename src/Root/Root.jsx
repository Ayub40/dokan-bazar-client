import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavLinks from "../component/NavLinks";


const Root = () => {
    return (
        <>
            <NavLinks></NavLinks>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Root;