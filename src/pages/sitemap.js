import Meta from "../components/Meta"
import Image from 'next/image'

const sitemap = ({ items }) => {
  

    return (
        <div>
            <Meta title="Gold Wedding Jewelry | Custom Jewelry Design | Yasini Jewelers"
                description="Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18K, 21K & 22K gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Order Online!"
                keywords=""

            />
            <>
                <div className="subheader">
                    <h1 className="">EXPLORE OUR WEBSITE</h1>
                    <div className="breadcrum "><a href="/">Home</a> <i className="fa fa-angle-double-right"></i> SITEMAP</div>
                </div>
                <section id="content" className="">
                    <div className="container">
                    <div className="col-md-12 col-sm-12 px-15">
                    <h2>Site Map</h2>
                                    <hr />

                                    <div className="row">

                                    <div className="col-md-4 col-sm-6">

                                    <div class="block">
                        <h4>Quick Links</h4>
                        <Image
                                        src="/images/sitemap-img1.png"
                                        alt="img"
                                        width={321}
                                        height={195}
                                    />
                        <ul>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/customerservice">Customer Service</a></li>
                            <li><a href="/images/yasini-ring-sizer.pdf" target="_blank">Ring Sizer</a></li>
                            <li><a href="/productcare">Product Care</a></li>
                            <li><a href="/diamondeducation">Diamond Education</a></li>
                            <li><a href="/customization">Customization</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/locations">Locations</a></li>
                        </ul>
                    </div>



                                    </div> 
                                    {/* colmd4 */}

<div class="col-md-4 col-sm-6">
                    <div class="block">
                        <h4>Customer Care</h4>
                        <Image
                                        src="/images/sitemap-img2.png"
                                        alt="img"
                                        width={321}
                                        height={195}
                                    />
                        <ul>
                            <li><a href="/myaccount">My Account</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/ordertrack">Track Your Order</a></li>
                            <li><a href="/shippingreturn">Shipping &amp; Returns</a></li>
                            <li><a href="/faqs">FAQ's</a></li>
                            <li><a href="http://blog.yasini.com" target="_blank">Blog</a></li>
                            <li><a href="/mywishlist">Wishlist</a></li>
                            <li><a href="/compare">Compare</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="block">
                        <h4>Shop</h4>

                        <Image
                                        src="/images/sitemap-img3.png"
                                        alt="img"
                                        width={321}
                                        height={195}
                                    />
                        <ul>
                            <li><a href="/YellowGold">Yellow Gold Jewelry </a></li>
                            <li><a href="/WhiteGold">White Gold Jewelry</a></li>
                            <li><a href="/Diamond">Diamonds Jewlry</a></li>
                            <li><a href="/certifieddiamonds">Certified Diamonds</a></li>
                        </ul>
                    </div>
                </div>




                                        </div> 

                                        {/* row end */}


                </div>


                        </div>
                        </section>
               

            </>
        </div >
    )
}





export default sitemap;