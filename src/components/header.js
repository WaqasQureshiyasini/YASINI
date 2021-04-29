import Image from 'next/image'
import headerStyle from "../styles/TopHeader.module.css"

import Link from 'next/link'

const Header = () => {
    return (
        <div className={headerStyle["top-section"]}>
            <div className="row">
                <div className={`col-md-12 col-sm-12 ${headerStyle.logo}`}>
                  
                    <Image
                        src="/images/logo.png"
                        alt="Picture of the author"
                        width={177}
                        height={55}
                    />
                </div>

                <div className={`col-md-12 col-sm-12 ${headerStyle["top-section"]}`}>
                     <div className="container">
                <div className={`${headerStyle["navbar-wrapper"]} `}>
       
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Yellow Gold Jewelry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">White Gold Jewelry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gold Bullion</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Diamond Jewelry</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Certified Diamonds</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="">Watches</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">L'azurde</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
            </div>
        </div>
        </div>

            </div>
        </div>
    )
    }

    export default Header;
