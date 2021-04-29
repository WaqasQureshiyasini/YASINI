import Meta from "../components/Meta"

const pageTitle = "YellowGold"
const YellowGold = ({ items }) => {
    return (
        <div>
            <Meta title="Gold Wedding Jewelry | Custom Jewelry Design | Yasini Jewelers"
                description="Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18K, 21K & 22K gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Order Online!"
                keywords=""

            />
            <>
                <div className="subheader ">
                    <h1 className="">Yellow Gold Jewelry</h1>
                    <div className="breadcrum "><a href="/">Home</a> <i className="fa fa-angle-double-right"></i> Yellow Gold Jewelery</div>
                </div>

                <section id="content" className="">
                    <div className="container">
                        <div className="row">
                            {
                                items.map(item => {
                                    return (
                                        <div key={item.id} className="col-md-3 col-sm-6 ">
                                            <div className="cat">
                                                <div className="cat-img">
                                                    <a href={`/${pageTitle}/${item.name.replace(/ /g, "_")}`}>
                                                        <img border="0" width="100" height="134" src={`https://yasini.com/images/category/${item.id}.jpg`} className="img-responsive" alt="" />
                                                    </a></div>
                                                <h4 className=""><a href={`/${pageTitle}/${item.name.replace(/ /g, "_")}`}></a></h4>
                                                <a href={`/${pageTitle}/${item.name.replace(/ /g, "_")}`} className="bottom ">{item.name}</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </>
        </div >
    )
}



export async function getStaticProps() {
    const res = await fetch(`https://yasini.com/yasiniapi/api/category/parent/4`)
    const items = await res.json()
  
    return {
      props: {
        items,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    }
  }

export default YellowGold;