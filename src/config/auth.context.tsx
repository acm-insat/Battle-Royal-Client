import { isNull } from 'lodash'
import { createContext, useContext, useEffect, useState } from 'react'

const Ctx = createContext<{ isAuth; setIsAuth }>({
  isAuth: isNull(localStorage.getItem('token')),
  setIsAuth: undefined,
})

export const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(Ctx)
  const login = token => {
    setIsAuth(true)
    localStorage.setItem('token', token)
  }
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('token')
  }

  return {
    isAuth,
    login,
    logout,
  }
}

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setIsAuth(!isNull(localStorage.getItem('token')))
  }, [isAuth])

  return <Ctx.Provider value={{ isAuth, setIsAuth }}>{children}</Ctx.Provider>
}
