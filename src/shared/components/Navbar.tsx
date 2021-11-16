import { Button, Team } from '../ui'

const Navbar = () => {
  const isLoggedIn = true
  const isAdmin = true

  return (
    <div className="bg-primary-1 shadow-md">
      <nav className="w-4/5 mx-auto py-2 h-auto flex items-center">
        <Button href="/" className="font-bold">
          ACM | Battle Royale
        </Button>

        {/* <div className="w-3/5	flex float-left">
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/problemset" show={isLoggedIn}
        >
          Problemset
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/submissions" show={isLoggedIn && isAdmin}
        >
          Submissions
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/leaderboard"
        >
          Leaderboard
        </Button>
</div>

<div className="w-1/5	flex float-right">
<Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/login" show={!isLoggedIn}
        >
          Login
        </Button>
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
