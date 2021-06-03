import Meta from "../components/Meta"
import Image from 'next/image'
import { useFormik } from 'formik';

const pageTitle = "contactus"
const validate = () => {

}
const contactus = ({ items }) => {
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
                    <h1 className="">CONTACT US</h1>
                    <div className="breadcrum "><a href="/">Home</a> <i className="fa fa-angle-double-right"></i> CONTACT US</div>
                </div>

                <section id="content">
                    <div className="container display-flex">

                        {/* sidebar */}
                        <div className="col-md-3 col-sm-3 px-15">
                            <aside>
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


                        <div className="col-sm-9 col-md-9 px-15">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Our Contact Information</h2>
                                    <p>We welcome your questions, concerns, and feedback.</p>

                                    <hr />
                                    {/* <img src="images/img2.png" alt="" class="img-responsive img-margin"> */}
                                    <Image
                                        src="/images/img2.png"
                                        alt="img"
                                        width={753}
                                        height={318}
                                    />
                                    <p>Contact a <b>Yasini Jewelers</b> Location at <big><b>800-667-2220</b></big> Or leave us your comment and one of our customer representative will be in touch with you.</p>

                                    <h3>Email Address</h3>
                                    <div className="row">
                                        <div className="col-md-4"><i className="fa fa-envelope"></i> <a href="mailto:info@yasini.com">info@yasini.com</a> </div>
                                        <div className="col-md-4"><i className="fa fa-envelope"></i> <a href="mailto:sales@yasini.com">sales@yasini.com</a> </div>
                                        <div className="col-md-4"><i className="fa fa-envelope"></i> <a href="mailto:customerservices@yasini.com">customerservices@yasini.com</a> </div>
                                    </div>

                                    <hr/>

                                    <h3>Contact Form</h3>
                                    <p>If you have any questions, comments, or concerns. Please completly fill out this Contact Us Form &amp; we will respond in an timely fashion.</p>

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">

                                                <label htmlFor="name">First Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                />
                                                {formik.touched.name && formik.errors.name ? (
                                                    <div>{formik.errors.name}</div>
                                                ) : null}
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div>{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="comments">Comments:</label>

                                                <textarea rows="10" name="comments" id="comments"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.comments}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button className="all-btn" type="submit">
                                                    <span>Submit
                                                        </span>
                                                </button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>





                        {/* there  */}


                    </div>

                </section>

            </>
        </div >
    )
}





export default contactus;