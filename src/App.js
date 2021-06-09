import { Suspense, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory, matchPath  } from 'react-router-dom'
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

  const history = useHistory()
  const pathname = history.location.pathname

  // redirect to not found in case route doesn't exist
  useEffect(() => {
    const isMatch = appRoute.find(route  => matchPath(pathname, route))

    if (!isMatch) {
      history.replace('/not-found')
    }
  }, [pathname, history, appRoute])

  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        {
          appRoute.map((item, i) => (
            <Route key={i} exact={item.exact} path={item.path} component={item.component} />
          ))
        }
      </Suspense>
    </Switch>
  )
}

export default AppWrapper
