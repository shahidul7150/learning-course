import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div data-theme="light">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;