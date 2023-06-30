import React from 'react'
import basket from '/public/static/images/basket.png'
import logo from '/public/static/images/logo.png'

function Header({ setOpen, cartItems }) {
	return (
		<div className=' w-4/6 h-20 mt-16 bg-white rounded-2xl flex items-center    justify-between'>
			<div className='flex items-center cursor-pointer'>
				<img className='ml-4 w-14 h-auto' src={logo} alt='logo' />
				<p className='ml-4 text-xl'>
					Магазин <br /> кроссовок
				</p>
			</div>
			<div className='flex items-center relative'>
				<img
					onClick={() => setOpen(true)}
					className='cursor-pointer mr-6 w-7 h-auto'
					src={basket}
					alt='basket'
				/>
				<div className='absolute right-5 bottom-3 min-w-4 h-4 flex items-center justify-center text-white rounded-full bg-red-600 text-sm'>
					<p onClick={() => setOpen(true)} className='p-1 cursor-pointer'>
						{cartItems.length}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Header
