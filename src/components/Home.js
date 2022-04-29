import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ShoppingCart from "./ShoppingCart";
import { products } from "./mock_data.js";
const all_cards = require("../img/all_cards.jpg");

export default function Home(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  function addToCart(e, product) {
    setCheckout(true);
    setShoppingCart([...shoppingCart, product]);
  }
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Create an account
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      {/* Header */}
      <Header shoppingCart={shoppingCart} setCheckout={setCheckout} />

      <main>
        {/* Hero */}
        {!checkout && (
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                  <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                        Mint Sports
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        All the sports memorabilia in the world. Click on the
                        product you want to buy and we will take you to the
                        checkout page!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img
                  src={all_cards}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {!checkout && (
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
              <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2
                  id="trending-heading"
                  className="text-2xl font-extrabold tracking-tight text-gray-900"
                >
                  Product Catalog
                </h2>
              </div>

              <div className="mt-8 relative">
                <div className="relative w-full overflow-x-auto">
                  <ul className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="w-64 inline-flex flex-col text-center lg:w-auto"
                      >
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                          </div>
                          <div className="mt-6">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            <h3 className="mt-1 font-semibold text-gray-900">
                              <form action={product.href} method="POST">
                                <input
                                  type="hidden"
                                  name="priceId"
                                  value={product.priceId}
                                />
                                <button type="submit">
                                  <span className="absolute inset-0" />
                                  {product.name}
                                </button>
                              </form>
                            </h3>
                            <p className="mt-1 text-gray-900">
                              {product.price}
                            </p>
                          </div>
                        </div>
                        <button
                          type="submit"
                          onClick={(e) => addToCart(e, product)}
                          className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add to cart
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 px-4 sm:hidden">
                <a
                  href="#"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  See everything<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Cart */}
        {checkout && <ShoppingCart shoppingCart={shoppingCart} />}
      </main>

      <Footer />
    </div>
  );
}
