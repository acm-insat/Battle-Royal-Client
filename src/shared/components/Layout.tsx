import Navbar from './Navbar'
import Footer from './Footer'
import { camelCase } from 'lodash'

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="bg-dark-1 min-h-screen ">
      <Navbar />
      <main
        className="w-full px-4 md:w-3/5 mx-auto min-h-full pb-20"
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
