import Meta from "../../components/Meta"
import Accordian from "../../components/Accordian"
import Image from 'next/image'
const PageId = ({ items, finalCategories, subCat }) => {
    const pageTitle = "Product"

    return (
        <div>
            <Meta title="Gold Wedding Jewelry | Custom Jewelry Design | Yasini Jewelers"
                description="Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18K, 21K & 22K gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Order Online!"
                keywords=""

            />
            <>
                <div className="subheader">
                    <h1 className="">{subCat.name}</h1>
                    <div className="breadcrum "><a href="/">Home</a> <i className="fas fa-angle-double-right"></i><a href="/YellowGold">Yellow Gold Jewelery </a> <i className="fas fa-angle-double-right"></i>COINS & BULLION</div>
                </div>

                <section id="content">
                    <div className="container display-flex">

                        {/* sidebar */}
                        <div className="col-md-3 col-sm-3 px-15">
                            <aside>

                                <div class="widget">
                                    <div class="filter-by-price">
                                        <h2>Filter by price</h2>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="range" class="form-range" id="customRange1" />

                                            </div>
                                        </div>

                            
                                    </div>
                                </div>

                                <div class="widget">
                                    <h2>Product Categories</h2>

                                    {/* <Accordian list={finalCategories} /> */}

                                </div>

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


                        <div className="col-sm-12 col-md-9 px-15">
                            <p class="ng-binding">Showing 1-12 of 51 products</p>

                            <div class="row">

                                <div id="gridview-listview">

                                    {
                                        items.map(item => {
                                            return (
                                                <div className="col-md-4 col-sm-6 px-15" key={item.id}>
                                                    <div className="product" id="dv21474">

                                                        <div className="product-img">
                                                            <a href={`/${pageTitle}/${item.name.replace(/ /g, "_")}`}>
                                                                <img border="0" width="195" height="231" src={`https://yasini.com/images/Product/195x231/${item.comments.split("*")[2]}`} className="img-responsive" alt="" />
                                                            </a></div>
                                                    </div>


                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                            {/* div ended col-sm-12  */}


                        </div>
                    </div>

                </section>

            </>
        </div >
    )
}

// This function gets called at build time
export async function getStaticPaths(ctx) {
    // Call an external API endpoint to get categories
    const res = await fetch('https://www.yasini.com/yasiniapi/api/category')
    const categories = await res.json()

    
    // Get the paths we want to pre-render based on categories
    const paths = categories.map((post) => ({
      params: { name: String(post.name.replace(/ /g, "_")) },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  } 

export async function getStaticProps(ctx) {
    const { params } = ctx;
    const subCategoryName = params.name.replace(/_/g, " ")
    const catRes = await fetch(`https://www.yasini.com/yasiniapi/api/category/category/info/${subCategoryName}?id=4&mode=subcategory`)
    const subCat = await catRes.json()


    const res = await fetch(`https://yasini.com/yasiniapi/api/product/products/parent/${subCat.id}`)
    const items = await res.json()
    console.log("items: ", items)
    return {
        props: {
            items,
            // categories,
            // subCategories,
            // productCategories,
            subCat,
            // finalCategories,
        }
    }
}



export default PageId;