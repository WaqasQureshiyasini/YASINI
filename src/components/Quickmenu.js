

const Quickmenu = () => {
    return (
        <div className="block">
            <ul className="quick_menu">
                <li> <a href="/aboutus"> <i className ="fas fa-angle-right angleMargin"></i>About Us </a></li>
                <li><a href="/ordertrack"> <i className ="fas fa-angle-right angleMargin"></i>Track Your Order</a></li>
                <li><a href="images/yasini-ring-sizer.pdf" target="_blank"> <i className ="fas fa-angle-right angleMargin"></i>Ring Sizer</a></li>
                <li><a href="/productcare"> <i className ="fas fa-angle-right angleMargin"></i>Product Care</a></li>
                <li><a href="/customization"> <i className ="fas fa-angle-right angleMargin"></i>Customization</a></li>
                <li><a href="/diamondeducation"> <i className ="fas fa-angle-right angleMargin"></i>Diamond Education</a></li>
                <li><a href="/locations"> <i className ="fas fa-angle-right angleMargin"></i>Locations</a></li>
                <li><a href="/shippingreturn"><i className ="fas fa-angle-right angleMargin"></i> Shipping &amp; Returns</a></li>
                <li><a href="http://blog.yasini.com/" target="_blank"><i className ="fas fa-angle-right angleMargin"></i>Blog</a></li>
                <li><a href="/faqs"> <i className ="fas fa-angle-right angleMargin"></i> FAQ's</a></li>
            </ul>
        </div>
    )
}

export default Quickmenu;