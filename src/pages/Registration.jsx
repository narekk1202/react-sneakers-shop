import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [secondPassword, setSecondPassword] = useState('')

	const navigate = useNavigate()

	const checkUser = async username => {
		try {
			const isDataExists = await axios.get(
				`https://644f97dbba9f39c6ab675407.mockapi.io/userData?email=${username}`
			)
			return isDataExists.data.length > 0
		} catch (err) {
			console.log(err)
			return false
		}
	}
	const signIn = async username => {
		if (email !== '' && password !== '' && password === secondPassword) {
			try {
				const userExists = await checkUser(username)
				if (!userExists) {
					try {
						setEmail('')
						setPassword('')
						setSecondPassword('')
						await axios.post(
							'https://644f97dbba9f39c6ab675407.mockapi.io/userData',
							{
								email: email,
								password: password,
							}
						)
					} catch (err) {
						console.log(err)
					}

					navigate('/login')
				} else {
					alert('Такой пользователь уже существует. Введите другие данные.')
				}
			} catch (err) {
				console.log(err)
			}
		}
	}

	return (
		<form
			onSubmit={e => e.preventDefault()}
			className='w-full h-screen flex justify-center items-center flex-col'
		>
			<p className='text-xl mb-10'>Создать аккаунт</p>
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
			<div className='flex items-start flex-col mt-5'>
				<label className='text-sm'>Повторите пароль:</label>
				<input
					minLength={8}
					value={secondPassword}
					onChange={e => setSecondPassword(e.target.value)}
					type='password'
					className='w-[350px] h-[35px] border-2 border-black rounded-md focus:outline-blue-500 focus:border-none px-2 tracking-[3px]'
				/>
			</div>
			<button
				onClick={() => signIn(email)}
				type='submit'
				className='mt-5 w-[85px] h-[35px] bg-blue-500 border-2 border-blue-500 text-white rounded-md transition hover:bg-transparent hover:border-2 hover:text-blue-500'
			>
				Создать
			</button>
			<p className='mt-5'>
				Уже есть аккаунт?{' '}
				<Link to={'/login'} className='text-blue-600 underline'>
					Войти
				</Link>
			</p>
		</form>
	)
}

export default Registration
