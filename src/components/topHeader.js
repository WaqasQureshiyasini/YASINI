import headerStyle from "../styles/TopHeader.module.css"

const TopHeader = () => {
    return (
        <div className={headerStyle.top_bar}>
        <div className="row">
            <div className="col-md-3 col-sm-3 text-left">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/locations">Locate A Store</a></li>
                <li><i className="fas fa-phone"></i> <a href="tel:8006672220">800-667-2220</a></li>
              </ul>
            </div>
            
             <div className="col-md-6 col-sm-6">
           
            </div>            
        
        <div className="col-md-3 col-sm-3 text-right">        
            <ul className="acc">
                <li><a href="/register"><i className="fas fa-sign-in-alt"></i></a></li>
                <li><a href="/mywishlist" title="Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="/compare" title="Compare"><i className="fas fa-retweet"></i></a></li>
                <li><a href="" className="mybag"><i className="fas fa-shopping-cart"></i> <span ></span></a> </li>
            </ul>
            <div className="search">
                <form name="mfrmsearch">
                	<input type="text" placeholder="Search..."  />
                    <button ><i className="fa fa-search"></i></button>
                </form>
            </div>
          
        </div>
        </div>
    </div>
    )
}

export default TopHeader;