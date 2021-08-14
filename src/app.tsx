import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >home</Route>
        <Route path="/about" exact >about</Route>
      </Switch>
    </Router>
  )
}
export default App
