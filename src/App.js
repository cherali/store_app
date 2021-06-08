import { Suspense, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { routes } from 'routes'
import Spinner from 'Components/Spinner/Spinner'


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>

  )
}


function App() {
  const appRoute = routes
  const routesName = appRoute.map(item => item.path)

  const history = useHistory()
  const pathname = history.location.pathname

  // redirect to not found in case route doesn't exist
  useEffect(() => {
    if (!routesName.includes(pathname)) {
      history.replace('/not-found')
    }
  }, [pathname, history, routesName])


  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        {
          appRoute.map((item, i) => (
            <Route key={i} exact path={item.path} component={item.component} />
          ))
        }
      </Suspense>
    </Switch>
  )
}

export default AppWrapper
