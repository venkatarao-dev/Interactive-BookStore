import {Route, Navigate} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = ({element: Component, ...rest}) => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return <Route {...rest} element={<Component />} />
}

export default ProtectedRoute
