import React from 'react'

function Cards({ image, title, price, id, quantity, onPlus }) {
	const onAddClicked = () => {
		onPlus({ image, title, price, quantity, id })
	}

	return (
		<div className='flex flex-wrap justify-center'>
			<div className='hover:-translate-y-1 transition w-64 h-auto p-3 mt-4 ml-4 bg-blue-50 rounded-lg flex flex-col items-start'>
				<img src={image} alt={title} />
				<p className='mt-3'>{title}</p>
				<div className='flex items-center'>
					<p className='mt-3 text-sm'>Цена: {price} руб.</p>
					<div
						onClick={onAddClicked}
						className=' ml-16 mt-3 cursor-pointer active:bg-transparent hover:bg-black hover:text-white transition w-7 h-7 rounded-md border-2 border-black flex items-center justify-center'
					>
						✚
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
