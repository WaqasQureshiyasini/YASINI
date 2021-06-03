// import Nav from "./Nav";
import Meta from "./Meta";
import TopHeader from "./topHeader"
import Header from "./header";
import Footer from './Footer'


import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Meta />

            <>

                <div >

                    <TopHeader />
                    <Header />
                    {children}
                    <Footer />

                </div>
            </>
        </>
    );
};

export default Layout;