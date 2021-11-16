import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from 'shared/components/Layout'
import Routes from './config/app.routes'
import ProtectedRoute from 'shared/components/ProtectedRoute'
import Loading from 'shared/components/Loading'
// import { wrapper } from './shared/apollo.utils'
// import { queryData } from 'shared/queries'

const App = (props: any) => {
  // const {
  //   data: { loading, error, someRates },
  // } = props
  // console.log({ loading, error, someRates })

  const isLoggedIn = true
  return (
    <Suspense fallback={<Loading className="w-10 h-10 m-auto" />}>
      <Router>
        <Layout>
          <Switch>
            {Routes.routes.map(({ path, component, shouldBeloggedIn }) =>
              !shouldBeloggedIn || (isLoggedIn && shouldBeloggedIn) ? (
                <Route key={path} exact path={path} component={component} />
              ) : null
            )}

            <Redirect to="/404" />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}
export default App
