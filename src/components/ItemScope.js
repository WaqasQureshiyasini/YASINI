import ItemScopeStyle from "../styles/ItemScope.module.css"

const ItemScope = () => {
    return (
        <section className={`${ItemScopeStyle.itemscope}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-md-4 col-sm-4 ${ItemScopeStyle.item}`}>
                        <a href="/YellowGold"><img src="/images/Gold-Jewelry.png" className="img-responsive" alt="Gold Jewelry" />
                            <h3>Gold Jewelry</h3></a>
                    </div>
                    <div className={`col-md-4 col-sm-4 ${ItemScopeStyle.item}`}>
                        <a href="/Diamond"><img src="/images/Diamond-Jewelry.png" className="img-responsive" alt="Diamond Jewelry" />
                            <h3>Diamond Jewelry</h3></a>
                    </div>
                    <div className={`col-md-4 col-sm-4 ${ItemScopeStyle.item}`}>
                        <a href="/Lazurde"><img src="/images/lazurde-collection.png" className="img-responsive" alt="l’azurde-collection" />
                            <h3>L’azurde collection</h3></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemScope;