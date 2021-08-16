import Button from '../ui/Button'

const Navbar = () => {
  const isLoggedIn = false
  const isAdmin = false

  return (
    <div className="bg-red-1 shadow-md">
      <nav className="w-4/5 mx-auto py-2 h-auto flex items-center">
        <Button href="/" className="font-bold">
          ACM | Battle Royal
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/problemset"
        >
          Problemset
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/scoreboard"
        >
          Scoreboard
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/admin"
          show={isAdmin}
        >
          Add a Problem
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/admin"
          show={isAdmin}
        >
          Launch / End
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/admin"
          show={isAdmin}
        >
          Clarifications
        </Button>
        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/submissions"
          show={isLoggedIn && !isAdmin}
        >
          submissions
        </Button>

        <span className="ml-auto"></span>

        <Button href="/login" contained show={!isLoggedIn}>
          Login
        </Button>
        <Button href="/login" contained show={isLoggedIn}>
          Logout
        </Button>
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
