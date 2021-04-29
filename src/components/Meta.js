
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
     <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />  
    <meta name="author" content="" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Gold Wedding Jewelry | Custom Jewelry Design | Yasini Jewelers',
  keywords: 'Gold Wedding Jewelry,Custom Jewelry Design,Yasini Jewelers',
  description: `Yasini Jewelers specializes in a wide range of jewelry products imported from all over the world. We carry 18K, 21K & 22K gold jewelry, along with certified diamonds, diamond jewelry, colored stones and watches. Order Online!`,
}

export default Meta