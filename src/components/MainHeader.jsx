import React from 'react'

function MainHeader({ searchValue, onSearch }) {
	return (
		<div className='mt-7 w-11/12 flex items-center justify-between flex-wrap'>
				<p className='text-3xl ml-4 text-center'>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</p>
				<input
					onChange={onSearch}
					value={searchValue}
					className='mt-4 mr-1 w-38 h-9 text-slate-400 pl-2 text-sm focus:outline-none border-2 rounded-md'
					type='text'
					placeholder='Поиск...'
				/>
		</div>
	)
}

export default MainHeader
