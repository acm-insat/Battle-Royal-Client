import { Route, Redirect } from 'react-router-dom'
import { includes } from 'lodash'

const ProtectedRoute = (props: Props) => {
  const { path, component, shouldBeloggedIn, isLoggedIn = false } = props

  console.log(path, component, shouldBeloggedIn, isLoggedIn)

  if (!shouldBeloggedIn || (isLoggedIn && shouldBeloggedIn))
    return <Route exact path={path} component={component} />
  console.log('nah')

  return null
}

type Props = {
  path: string
  component: JSX.Element | any
  isLoggedIn?: Boolean
  shouldBeloggedIn: Boolean
}

export default ProtectedRoute
