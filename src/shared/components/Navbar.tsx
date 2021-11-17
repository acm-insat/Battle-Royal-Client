import { useHistory } from 'react-router'
import { Button } from '../ui'

const Navbar = props => {
  const { name, isLoggedIn } = props
  const router = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <div className="bg-primary-1 shadow-md">
      <nav className="w-4/5 mx-auto py-2 h-auto flex items-center">
        <Button href="/" className="font-bold ">
          INSAT ACM {name ? `~ ${name}` : null}
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/problemset"
        >
          Problemset
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/submissions"
          show={isLoggedIn}
        >
          Submissions
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/leaderboard"
        >
          Leaderboard
        </Button>

        <div className="mx-auto"></div>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/login"
          show={!isLoggedIn}
        >
          Login
        </Button>

        <Button contained show={isLoggedIn} onClick={handleLogout}>
          Logout
        </Button>

        {/* 
        
        
        



        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/register"
        outlined show={!isLoggedIn}>
          Register
        </Button>
        <Team name="Linus Tech Tips" username="Linus Sebastian" size="small" show={isLoggedIn}/>
        <Button href="/admin" className="text-opacity-50 hover:text-opacity-100" show={isLoggedIn && isAdmin}>
        <i className="fas fa-user-shield"></i>
        </Button>
</div>
         */}
      </nav>
    </div>
  )
}

export default Navbar

/*
import Link from "next/link"
import useAuth from "./useAuth"
import TeamNav from "./TeamNav"
import AdminNav from "./AdminNav"

export default function Navbar() {
    
    const { loading, isLogged, isAdmin } = useAuth()

    if (loading) return <></>

    if (isLogged && !isAdmin) 
        return <TeamNav navClass={navClass} loginClass={loginClass} />

    if (isLogged) 
        return <AdminNav navClass={navClass} loginClass={loginClass} />

*/
