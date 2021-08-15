import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props: Props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
}
export default Layout
