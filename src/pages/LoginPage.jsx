import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchData } from './Home'

function LoginPage({ setIsAuth }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const { data } = useQuery({
		queryKey: ['fetchData'],
		queryFn: () => fetchData('userData'),
	})

	function signIn() {
		if (email !== '' && password !== '') {
			data.forEach(data => {
				if (data.email === email && data.password === password) {
					setIsAuth(true)
					navigate('/order')
				}
			})
		} else {
			alert('Данные пусты или введены неправильно!')
		}
	}

	return (
		<form
			onSubmit={e => e.preventDefault()}
			className='w-full h-screen flex justify-center items-center flex-col'
		>
			<p className='text-xl mb-10'>Войдите в свой аккаунт</p>
			<div className='flex items-start flex-col'>
				<label className='text-sm'>Email:</label>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='email'
					className='w-[350px] h-[35px] border-2 border-black rounded-md focus:outline-blue-500 focus:border-none px-2'
				/>
			</div>
			<div className='flex items-start flex-col mt-5'>
				<label className='text-sm'>Пароль:</label>
				<input
					minLength={8}
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='password'
					className='w-[350px] h-[35px] border-2 border-black rounded-md focus:outline-blue-500 focus:border-none px-2 tracking-[3px]'
				/>
			</div>
			<button
				onClick={signIn}
				type='submit'
				className='mt-5 w-[85px] h-[35px] bg-blue-500 border-2 border-blue-500 text-white rounded-md transition hover:bg-transparent hover:border-2 hover:text-blue-500'
			>
				Войти
			</button>
			<p className='mt-5'>
				Еще нет аккаута?{' '}
				<Link to={'/registration'} className='text-blue-600 underline'>
					Создать
				</Link>
			</p>
		</form>
	)
}

export default LoginPage
