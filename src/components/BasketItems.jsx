import React from 'react'

function BasketItems({ cartItems, deleteBasketItems }) {

  return (
    <ul
    role="list"
    className="-my-6 divide-y divide-gray-200"
  >
    {cartItems.map((cartItems) => (
      <li key={cartItems.id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={cartItems.image}
            alt={cartItems.title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{cartItems.title}</h3>
              <p className="ml-4">
                {cartItems.price}р
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col text-sm">
            <div className="flex">
              <button
                onClick={() =>
                  deleteBasketItems(cartItems.id)
                }
                type="button"
                className="font-medium mt-3
               text-indigo-600 hover:text-indigo-500"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default BasketItems