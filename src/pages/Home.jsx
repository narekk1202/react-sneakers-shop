import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Basket from '../components/Basket'
import Error from '../components/Error'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Main from '../components/Main'

export const fetchData = async (endpoint) => {
	const res = await axios.get(
		`https://644f97dbba9f39c6ab675407.mockapi.io/${endpoint}`
	)
	return res.data
}

function Home() {
	const [cartItems, setCartItems] = useState([])
	const [open, setOpen] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		const localData = localStorage.getItem('cartItems')
		if (localData) {
			setCartItems(JSON.parse(localData))
		}
	}, [])

	const { data, isLoading, error } = useQuery({
		queryKey: ['fetchData'],
		queryFn: () => fetchData("sneakers"),
	})

	const onSearch = e => {
		setSearchValue(e.target.value)
	}

	if (error) {
		return <Error error={error.message} />
	}

	const onAddToCart = obj => {
		setCartItems(prev => {
			const updatedCart = [...prev, obj]
			localStorage.setItem('cartItems', JSON.stringify(updatedCart))
			return updatedCart
		})
	}
	return (
		<div className='App flex w-full min-h-screen justify-center items-center flex-col bg-blue-200'>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<Header setOpen={setOpen} cartItems={cartItems} />
					<Main
						onAddToCart={onAddToCart}
						sneakers={data}
						searchValue={searchValue}
						onSearch={onSearch}
					/>
					<Basket
						cartItems={cartItems}
						setCartItems={setCartItems}
						open={open}
						setOpen={setOpen}
						sneakers={data}
					/>
				</>
			)}
		</div>
	)
}

export default Home
