import './Layout.scss'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import Body from '../Body/Body'

const Layout = () => {
  return (
    <div >
        <div>
            <Header />
        </div>
        <div>
          <Body />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout
