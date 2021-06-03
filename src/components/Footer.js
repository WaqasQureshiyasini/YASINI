import { useState } from "react"
import Link from 'next/link'
const Footer = () => {
    const [emailValue, setEmailValue] = useState("")
    const [emailValid, setEmailValid] = useState(true)
    return (
        <footer>
            <div className="footer_desc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18k gold, 21k gold, 22k gold 24k gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Our 21k gold jewelry and most of our jewelry can be customize to your picture perfect jewelry.  The widely adored company also carries a variety of gold bullion both foreign and domestic. Yasini also offers custom 3D jewelry design, custom name plates, jewelry repair, gold refining, purchasing of jewelry and much more.</div>
                    </div>
                </div>
            </div>

            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-6">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/myaccount" title="My Account">My Account</a></li>
                                <li><a href="/register" title="Register">Register</a></li>
                                <li><a href="/ordertrack" title="Track Your Order">Track Your Order</a></li>
                                <li><a href="/shippingreturn" title="Shipping  Returns">Shipping  Returns</a></li>
                                <li><a href="/faqs" title="FAQ's">FAQ's</a></li>
                                <li><a href="http://blog.yasini.com" target="_blank" title="Blog">Blog</a></li>
                                <li><a href="/mywishlist" title="Wishlist">Wishlist</a></li>
                                <li><a href="/compare" title="Compare">Compare</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/YasiniJewelers/" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/yasinijewelers" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.pinterest.com/YasiniJewelers/" target="_blank" title="Pinterest"><i className="fab fa-pinterest"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UC-p42tiXiWj3LkU-pUxe9yQ" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="https://plus.google.com/b/102267736270380325734/102267736270380325734 " target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                                <li><a href="tel:8006672220"><i className="fas fa-phone-alt"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h4>Stay Connected</h4>
                        <p>Sign up to get exclusive offers from our favorite brands to be well up in the news.</p>
                        <form name="frmletter" novalidate="" >
                            <input type="email" defaultValue={emailValue} name="useremail" placeholder="Enter your email address" required=""  />
                           
                            <div className="clearfix"></div>
                            {emailValue && !emailValid &&
                            <p className="alert alert-danger ng-hide">Email is required.</p>
                            }
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="/YellowGold" title="Yellow Gold Jewelry">Yellow Gold Jewelry </a></li>
                            <li><Link href="/WhiteGold" title="White Gold Jewelry">White Gold Jewelry</Link></li>
                            <li><Link href="/Diamond" title="Diamond Jewelry">Diamond Jewelry</Link></li>
                            <li><Link href="/CertifiedDiamonds" title="Certified Diamonds">Certified Diamonds</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h4>Quick Links</h4>
                        <div className="display-flex flex-d-row">
                            <div className="col-md-6 col-sm-6">
                                <ul>
                                    <li><a href="/aboutus" title="About Us">About Us</a></li>
                                    <li><a href="/customerservice" title="Customer Service">Customer Service</a></li>
                                    <li><a href="images/yasini-ring-sizer.pdf" target="_blank" title="Ring Sizer">Ring Sizer</a></li>
                                    <li><a href="images/Bangle-Size.pdf" target="_blank" title="Bangle Size">Bangle Size</a></li>
                                    <li><a href="images/Necklace-Sizer.pdf" target="_blank" title=" Necklace Size">Necklace Size</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <ul>
                                    <li><a href="/productcare" title="Product Care">Product Care</a></li>
                                    <li><a href="/education" title="Diamond Education">Diamond Education</a></li>
                                    <li><a href="/customization" title="Customization">Customization</a></li>
                                    <li><a href="/contactus" title="Contact Us">Contact Us</a></li>
                                    <li><a href="/locations" title="Locations">Locations</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">Use of this website constitutes acceptance of the <a href="/terms" title="Terms Conditions">Terms  Conditions</a>. We care about your <a href="/privacypolicy" title="Privacy Policy">Privacy</a>. Copyright © <a href="https://www.yasini.com/"><b>Yasini Jewelers</b></a> | All Rights Reserved | <a href="/sitemap" title="Site Map">Site Map</a> | <a href="/privacypolicy" title="Privacy Policy">Privacy Policy</a> | <a href="/shippingreturn" title="Shipping  Returns Policy">Shipping  Returns Policy</a> | <a href="/shippingreturn" title="Exchange Policy">Exchange Policy</a> | <a href="https://www.yasini.com/shippingreturn/#lr">Lay-A-Way- Policy  Repairs Policy</a> | <a href="/terms" title="Terms  Conditions">Terms  Conditions</a></div>

            </div>

        </footer>
    )
}

export default Footer;