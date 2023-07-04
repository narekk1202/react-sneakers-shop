import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import Registration from './pages/Registration'
import ThanksPage from './pages/ThanksPage'
import PrivateRoute from './utils/PrivateRoute'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	return (
		<>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route element={<PrivateRoute isAuth={isAuth} />}>
					<Route path='/order' element={<Order />} />
				</Route>
				<Route path='/thanks' element={<ThanksPage />} />
				<Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
