import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from 'shared/components/Layout'
import Routes from './config/app.routes'
import Loading from 'shared/components/Loading'
import { wrapper } from './shared/apollo.utils'
import { getMyData } from 'shared/queries'
import { isNull } from 'lodash'
import { Toaster } from 'react-hot-toast'

const App = (props: any) => {
  const {
    data: { loading, user },
  } = props

  if (loading) return <Loading className="w-10 h-10 m-auto" />

  return (
    <Suspense fallback={<Loading className="w-10 h-10 m-auto" />}>
      <Router>
        <Layout isLoggedIn={!isNull(user)} name={user?.name}>
          <Toaster />
          <Switch>
            {Routes.routes.map(
              ({ path, component: Component, shouldBeloggedIn }: any) =>
                !shouldBeloggedIn || (user && shouldBeloggedIn) ? (
                  <Route
                    key={path}
                    exact
                    path={path}
                    component={props => <Component {...props} user={user} />}
                  />
                ) : null
            )}

            <Redirect to="/404" />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}
export default wrapper(getMyData)(App)
