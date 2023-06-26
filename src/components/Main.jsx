import { nanoid } from 'nanoid'
import React from 'react'
import Cards from './Cards'
import MainHeader from './MainHeader'

function Main({ sneakers, searchValue, onSearch, onAddToCart }) {

	return (
		<div className='w-4/6 h-auto mb-16 bg-white rounded-2xl mt-5 flex flex-col items-center'>
			<MainHeader searchValue={searchValue} onSearch={onSearch} />
			<div className=' w-11/12 mb-12 h-auto mt-12 flex flex-wrap justify-center items-center'>
				{sneakers
					?.filter(item =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map(items => {
						return (
							<Cards
								key={nanoid()}
								image={items.image}
								title={items.title}
								price={items.price}
								quantity={items.quantity}
								id={nanoid()}
								onPlus={obj => onAddToCart(obj)}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default Main
