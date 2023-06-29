import React, { useState } from 'react'

function CardCounter({ cartItems }) {
	const [quantity, setQuantity] = useState(cartItems.quantity)
	const [price, setPrice] = useState(cartItems.price)
	function incrementQuantity() {
		if (quantity !== 100) {
			setQuantity(quantity + 1)
			setPrice(price * quantity)
		}
	}

	function decrementQuantity() {
		if (quantity !== 0) {
			setQuantity(quantity - 1)
		}
	}

	return (
		<div className='w-[75px] flex rounded-full h-6 border-2 border-indigo-500 mt-5 justify-between'>
			<button
				onClick={decrementQuantity}
				className='w-[20px] text-white h-auto flex items-center justify-center rounded-full bg-indigo-500'
			>
				-
			</button>
			<p>{quantity}</p>
			<button
				onClick={incrementQuantity}
				className='w-[20px] text-white h-auto flex items-center justify-center rounded-full bg-indigo-500'
			>
				+
			</button>
		</div>
	)
}

export default CardCounter
