import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './shared/components/Layout'
import routes from './config/app.routes'
import ProtectedRoute from './shared/components/ProtectedRoute'
import Loading from './shared/components/Loading'
import { getRole } from './shared/utils'
import { wrapper } from './shared/apollo.utils'
import { queryData } from './shared/queries'

const App = (props: any) => {
  const {
    data: { loading, error, someRates },
  } = props
  console.log({ loading, error, someRates })
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Switch>
            {routes.map(props => (
              <ProtectedRoute
                key={props.path}
                {...props}
                currentRole={getRole()}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}
export default wrapper(queryData('USD'))(App)
