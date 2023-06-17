import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

function Basket({ open, setOpen, cartItems, setCartItems }) {
	const deleteBasketItems = id => {
		setCartItems(cartItems.filter(items => items.id !== id))
	}

	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

	return (
		<>
			{cartItems.length === 0 ? (
				<Transition.Root show={open} as={Fragment}>
					<Dialog as='div' className='relative z-10' onClose={setOpen}>
						<Transition.Child
							as={Fragment}
							enter='ease-in-out duration-500'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in-out duration-500'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
						</Transition.Child>
						<div className='fixed inset-0 overflow-hidden'>
							<div className='absolute inset-0 overflow-hidden'>
								<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
									<Transition.Child
										as={Fragment}
										enter='transform transition ease-in-out duration-500 sm:duration-700'
										enterFrom='translate-x-full'
										enterTo='translate-x-0'
										leave='transform transition ease-in-out duration-500 sm:duration-700'
										leaveFrom='translate-x-0'
										leaveTo='translate-x-full'
									>
										<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
											<div className='flex h-full flex-col bg-white shadow-xl'>
												<div className='flex-1 py-6 px-4 sm:px-6'>
													<div className='flex items-start justify-between'>
														<Dialog.Title className='text-lg font-medium text-gray-900'>
															Корзина
														</Dialog.Title>
														<div className='ml-3 flex h-7 items-center'>
															<button
																type='button'
																className='-m-2 p-2 text-gray-400 hover:text-gray-500'
																onClick={() => setOpen(false)}
															>
																<XMarkIcon
																	className='h-6 w-6'
																	aria-hidden='true'
																/>
															</button>
														</div>
													</div>
												</div>
												<div className='w-full h-screen flex items-center justify-center'>
													<p className='text-2xl'>Корзина пуста</p>
												</div>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</div>
					</Dialog>
				</Transition.Root>
			) : (
				<Transition.Root show={open} as={Fragment}>
					<Dialog as='div' className='relative z-10' onClose={setOpen}>
						<Transition.Child
							as={Fragment}
							enter='ease-in-out duration-500'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in-out duration-500'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
						</Transition.Child>

						<div className='fixed inset-0 overflow-hidden'>
							<div className='absolute inset-0 overflow-hidden'>
								<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
									<Transition.Child
										as={Fragment}
										enter='transform transition ease-in-out duration-500 sm:duration-700'
										enterFrom='translate-x-full'
										enterTo='translate-x-0'
										leave='transform transition ease-in-out duration-500 sm:duration-700'
										leaveFrom='translate-x-0'
										leaveTo='translate-x-full'
									>
										<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
											<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
												<div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
													<div className='flex items-start justify-between'>
														<Dialog.Title className='text-lg font-medium text-gray-900'>
															Корзина
														</Dialog.Title>
														<div className='ml-3 flex h-7 items-center'>
															<button
																type='button'
																className='-m-2 p-2 text-gray-400 hover:text-gray-500'
																onClick={() => setOpen(false)}
															>
																<span className='sr-only'>Закрыть панель</span>
																<XMarkIcon
																	className='h-6 w-6'
																	aria-hidden='true'
																/>
															</button>
														</div>
													</div>

													<div className='mt-8'>
														<div className='flow-root'>
															<ul
																role='list'
																className='-my-6 divide-y divide-gray-200'
															>
																{cartItems.map(cartItems => (
																	<li key={cartItems.id} className='flex py-6'>
																		<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
																			<img
																				src={cartItems.image}
																				alt={cartItems.title}
																				className='h-full w-full object-cover object-center'
																			/>
																		</div>

																		<div className='ml-4 flex flex-1 flex-col'>
																			<div>
																				<div className='flex justify-between text-base font-medium text-gray-900'>
																					<h3>{cartItems.title}</h3>
																					<p className='ml-4'>
																						{cartItems.price}р
																					</p>
																				</div>
																			</div>
																			<div className='flex items-end  text-sm'>
																				<div className='flex'>
																					<button
																						onClick={() =>
																							deleteBasketItems(cartItems.id)
																						}
																						type='button'
																						className='font-medium mt-2
                                           text-indigo-600 hover:text-indigo-500'
																					>
																						Удалить
																					</button>
																				</div>
																			</div>
																		</div>
																	</li>
																))}
															</ul>
														</div>
													</div>
												</div>

												<div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
													<div className='flex justify-between text-base font-medium text-gray-900'>
														<p>Итого:</p>
														<p>{totalPrice}</p>
													</div>
													<p className='mt-0.5 text-sm text-gray-500'>
														Доставка и налоги рассчитываются при оформлении
														заказа.
													</p>
													<div className='mt-6'>
														<a
															href='#'
															className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
														>
															Оформить заказ
														</a>
													</div>
													<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
														<p>
															или
															<button
																type='button'
																className='ml-2 font-medium text-indigo-600 hover:text-indigo-500'
																onClick={() => setOpen(false)}
															>
																Продолжить покупки
																<span aria-hidden='true'> &rarr;</span>
															</button>
														</p>
													</div>
												</div>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</div>
					</Dialog>
				</Transition.Root>
			)}
		</>
	)
}
export default Basket
