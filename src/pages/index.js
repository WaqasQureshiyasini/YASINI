
import Popular from "../components/popular"
import ItemScope from '../components/ItemScope'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/slider'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>



      <DynamicComponent />
      <Popular />
      <ItemScope />


    </div>
  )
}
