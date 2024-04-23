import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Home from '../Home'

const protectedRoute = () => {
  const token = Cookies.get('jwt-token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route exact path="/" component={Home} />
}

export default protectedRoute
