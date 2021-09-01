import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="bg-dark-1 min-h-screen">
      <Navbar />
      <main
        className="w-full px-4 md:w-3/5 h-full mx-auto"
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
}
export default Layout
