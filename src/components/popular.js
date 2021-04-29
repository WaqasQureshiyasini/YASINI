import popularStyle from "../styles/Popular.module.css"


const Popular = () => {
    return (
        <div>
            <div className={popularStyle["h_categories"]}>
                <h2 className={popularStyle["fancy_heading"]}>Popular Collections</h2>

                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <h3 className={popularStyle["gold_jewelry"]}>YELLOW <br /> GOLD <br /> JEWELRY</h3>
                            <a href="/YellowGold" className={popularStyle.view} title="Yellow Gold Jewelry">View Collection</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/YellowGold/Short_Necklace_Sets"><img src="images/Necklaces.png" width="231" height="136" className={popularStyle["img-responsive"]} alt="Necklace Sets" />
                            </a>
                            <a href="/YellowGold/Short_Necklace_Sets" className={popularStyle.view} title="Necklaces">Necklaces</a>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/YellowGold/Bangle_Bracelets"><img src="images/Bangels.png" width="231" height="136" className="img-responsive" alt="Bangels" /></a>
                            <a href="/YellowGold/Bangle_Bracelets" className={popularStyle.view} title="Bangels">Bangels</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/YellowGold/Bangle_Sets"><img src="images/Bangle-Sets.png" width="231" height="136" className="img-responsive" alt="Bangle Sets" />
                            </a>
                            <a href="/YellowGold/Bangle_Sets" className={popularStyle.view} title="Bangle Sets">Bangle Sets</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <h3 className={popularStyle["gold_jewelry_Small"]}>L’azurde Collection</h3>
                            <a href="/Lazurde" className={popularStyle.view} title="L’azurde Collection">L’azurde Collection</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/YellowGold/Rings"><img src="images/Rings.png" width="231" height="136" className={popularStyle["img-responsive"]} alt="Necklace Sets" />
                            </a>
                            <a href="/YellowGold/Rings" className={popularStyle.view} title="Rings">Rings</a>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/YellowGold/Coins_&_Bullion"><img src="images/Gold-Bullion.png" width="231" height="136" className="img-responsive" alt="Gold Bullion" /></a>
                            <a href="/YellowGold/Coins_&_Bullion" className={popularStyle.view} title="Gold Bullion">Gold Bullion</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className={popularStyle["home_cat"]}>
                            <a href="/Diamond"><img src="images/Diamond-Jewelry.png" width="231" height="136" className="img-responsive" alt="Bangle Sets" />
                            </a>
                            <a href="/Diamond" className={popularStyle.view} title="Diamond Jewelry">Diamond Jewelry</a>
                        </div>
                    </div>
                </div>

                <div className={popularStyle["clearfix"]}></div>
                <a href="/YellowGold" className={popularStyle.button} title="View All Collection">View All Collection</a>




            </div>
            {/*  h_categories */}

        </div>

    )
}

export default Popular;