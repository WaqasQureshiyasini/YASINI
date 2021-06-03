import Meta from "../components/Meta"
import Image from 'next/image'
import { useFormik } from 'formik';
import Quickmenu from "../components/Quickmenu";

const pageTitle = "aboutus"
const validate = () => {

}
const aboutus = ({ items }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comments: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Meta title="Gold Wedding Jewelry | Custom Jewelry Design | Yasini Jewelers"
                description="Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18K, 21K & 22K gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Order Online!"
                keywords=""

            />
            <>
                <div className="subheader">
                    <h1 className="">ABOUT US</h1>
                    <div className="breadcrum "><a href="/">Home</a> <i className="fa fa-angle-double-right"></i> ABOUT US</div>
                </div>

                <section id="content">
                    <div className="container display-flex">
                        <div className="col-sm-9 col-md-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Welcome to Yasini Jewelers</h2>
                                    <hr />
                                    <img src="/images/img1.png" alt="" className="img-responsive img-margin" />
                                    <p><b>Yasini Jewelers</b> roots were established in 1975 in Jerusalem, Palestine. In 1982 opened the first U.S. location in Brooklyn, New York. With their new location, <b>Yasini Jewelers</b> became the first unique jewelry store specializing in 21 karat gold.</p>
                                    <p>Since then, Yasini Jewelers established several branches throughout the country, making them the largest jewelry store specializing in high karat gold jewelry.</p>
                                    <ul className="list_check_3">
                                        <li>Brooklyn, New York 1982</li>
                                        <li>Ramallah, Palestine 1994</li>
                                        <li>Bridgeview, IL  2000</li>
                                        <li>Falls Church, VA  2002</li>
                                        <li>Orland Park, IL  2011</li>
                                        <li>Chicago, IL 2016</li>
                                        <li>Tampa, Florida 2017</li>
                                    </ul>

                                    <p><b>Yasini Jewelers</b> specializes in a wide range of jewelry products imported from all over the world. We carry 18k, 21k &amp; 22 Karat gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. The widely adored company also carries a variety of gold bullion both foreign and domestic. Yasini also offers custom 3D jewelry design, custom name plates, jewelry repair, gold refining, purchasing of jewelry and much more. </p>

                                    <p><b>Yasini Jewelers</b> have served generations of families as their trusted jeweler. Their main goal is their customer's satisfaction and ensuring that everyone that walks through their doors is thrilled, not only with their purchases, but with their overall shopping experience. Come in and visit the always exquisite, <b>Yasini Jewelers</b> or shop online on our secured shopping site. We are sure to have something in store for everyone!</p>
                                    <hr />
                                    <p><a href="/" className="all-btn big"><span>Start Shopping</span></a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-3">
                            <aside>

                                <div class="widget">
                                    <h2>Quick Menu</h2>
                                    <Quickmenu />

                                </div>

                                {/* sidebar */}

                                <div className="widget">
                                    <Image
                                        src="/images/free-shipping-banner.png"
                                        alt="img"
                                        width={273}
                                        height={151}
                                    />

                                </div>

                                <div className="widget">
                                    <Image
                                        src="/images/need-support-banner.png"
                                        alt="img"
                                        width={273}
                                        height={151}
                                    />

                                </div>

                                <div className="widget">
                                    <Image
                                        src="/images/contact-banner.png"
                                        alt="img"
                                        width={273}
                                        height={151}
                                    />

                                </div>

                            </aside>
                        </div>
                        {/* sidebar  */}

                    </div>
                </section>

            </>
        </div >
    )
}





export default aboutus;