import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import ThanksPage from './pages/ThanksPage'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/order' element={<Order />} />
				<Route path='/thanks' element={<ThanksPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
