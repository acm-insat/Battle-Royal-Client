import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
}
export default Layout
