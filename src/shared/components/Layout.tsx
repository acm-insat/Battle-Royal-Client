import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props: Props) => {
  const { children, name } = props
  return (
    <div className="bg-dark-1 min-h-screen ">
      <Navbar name={name} />
      <main className="w-full px-4 md:w-3/5 mx-auto min-h-full pb-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
  name
}
export default Layout
