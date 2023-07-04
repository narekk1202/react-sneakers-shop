import { Navigate } from 'react-router-dom'
import Order from '../pages/Order'

function PrivateRoute({ isAuth }) {
	return isAuth ? <Order /> : <Navigate to={'/login'} />
}

export default PrivateRoute
