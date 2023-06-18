import React from 'react'
import { Link } from 'react-router-dom'

function ThanksPage() {
	return (
		<div className='flex items-center justify-center flex-col w-full h-screen text-4xl'>
			Спасибо за покупку!
			<p className='text-xl mt-5 text-gray-400'>Покупка успешно прошла.</p>
			<Link to={'/'} className='text-[16px] mt-5 text-blue-400 underline'>
				Вернуться в главную страницу
			</Link>
		</div>
	)
}

export default ThanksPage
