import React, { useEffect, useRef, useState } from 'react'
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import {
	formatCVC,
	formatCreditCardNumber,
	formatExpirationDate,
} from '../utils/utils'

const Order = () => {
	const [number, setNumber] = useState('')
	const [name, setName] = useState('')
	const [expiry, setExpiry] = useState('')
	const [cvc, setCvc] = useState('')
	const [issuer, setIssuer] = useState('')
	const [focused, setFocused] = useState('')
	const [artifialLoading, setArtificalLoading] = useState(true)
	const formRef = useRef(null)

	const handleCallback = ({ issuer }, isValid) => {
		if (isValid) {
			setIssuer(issuer)
		}
	}

	const handleInputFocus = ({ target }) => {
		setFocused(target.name)
	}

	const handleInputChange = ({ target }) => {
		let value = target.value
		const name = target.name

		if (name === 'number') {
			value = formatCreditCardNumber(value)
		} else if (name === 'expiry') {
			value = formatExpirationDate(value)
		} else if (name === 'cvc') {
			value = formatCVC(value)
		}

		switch (name) {
			case 'number':
				setNumber(value)
				break
			case 'name':
				setName(value)
				break
			case 'expiry':
				setExpiry(value)
				break
			case 'cvc':
				setCvc(value)
				break
			default:
				break
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		const formElements = [...formRef.current.elements]
		const formData = formElements
			.filter(d => d.name)
			.reduce((acc, d) => {
				acc[d.name] = d.value
				return acc
			}, {})

		setFormData(formData)
		formRef.current.reset()
	}

	useEffect(() => {
		setTimeout(() => {
			setArtificalLoading(false)
		}, 3000)
	}, [])

	const navigate = useNavigate()

	const pay = () => {
		if (number && name && expiry && cvc) {
			setArtificalLoading(true)
			setTimeout(() => {
				navigate('/Thanks')
			}, 3000)
		}
	}
	

	return (
		<div className='flex items-center justify-center w-full h-screen'>
			{artifialLoading ? (
				<Loading />
			) : (
				<div
					key='Payment'
					className='flex w-full min-h-screen justify-center items-center flex-col'
				>
					<p className='text-black text-3xl mb-10'>
						Оплатите покупку кроссовок
					</p>
					<div className='App-payment'>
						<Card
							number={number}
							name={name}
							expiry={expiry}
							cvc={cvc}
							focused={focused}
							callback={handleCallback}
						/>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className='w-[350px] h-[200px] flex items-center flex-col justify-between mt-5'
						>
							<div className='form-group'>
								<input
									type='tel'
									name='number'
									maxLength={19}
									className='w-[350px] h-10 rounded-md p-4 focus:outline-none focus:border-blue-500 border-2 transition-colors border-gray-400'
									placeholder='Card Number'
									pattern='[\d| ]{16,22}'
									required
									onChange={handleInputChange}
									onFocus={handleInputFocus}
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									name='name'
									className='w-[350px] h-10 rounded-md p-4 focus:outline-none focus:border-blue-500 transition-colors border-gray-400 border-[2px]'
									placeholder='Name'
									required
									onChange={handleInputChange}
									onFocus={handleInputFocus}
								/>
							</div>
							<div className='flex items-center justify-between w-[350px]'>
								<div className='col-6'>
									<input
										type='tel'
										name='expiry'
										className='w-[173px] h-10 rounded-md p-4 focus:outline-none focus:border-blue-500 border-2 transition-colors border-gray-400'
										placeholder='Valid Thru'
										pattern='\d\d/\d\d'
										required
										onChange={handleInputChange}
										onFocus={handleInputFocus}
									/>
								</div>
								<div className='col-6'>
									<input
										type='tel'
										name='cvc'
										className='w-[173px] h-10 rounded-md p-4 focus:outline-none focus:border-blue-500 border-2 transition-colors border-gray-400'
										placeholder='CVC'
										pattern='\d{3,4}'
										required
										onChange={handleInputChange}
										onFocus={handleInputFocus}
									/>
								</div>
							</div>
							<input type='hidden' name='issuer' value={issuer} />
							<div className='form-actions'>
								<button
									onClick={pay}
									className='w-[350px] h-[38px] rounded-md bg-blue-500 text-white'
								>
									Оплатить
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default Order
