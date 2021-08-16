import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="bg-dark-1 min-h-screen">
      <Navbar />
      <main className="w-3/5 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
}
export default Layout
