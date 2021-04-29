// add bootstrap css 
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/font-awesome.css'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/categories.css'

function MyApp({ Component, pageProps }) {
  return(
        <Layout > 
    <Component {...pageProps} />
        </Layout>
    

  ) 
}

export default MyApp
