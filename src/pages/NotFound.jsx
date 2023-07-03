import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className='w-full h-screen flex items-center justify-center flex-col'>
			Page Not Found :(
			<Link to="/" className="text-blue-500 underline	">Home</Link>
		</div>
	)
}

export default NotFound
