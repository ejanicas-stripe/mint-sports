import { products } from "./mock_data.js";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/react/solid";

export default function Products(props) {
  const { shoppingCart, setShoppingCart, setCheckout } = props;
  function addToCart(e, product) {
    setCheckout(true);
    setShoppingCart([...shoppingCart, product]);
  }
  return (
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
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <button
                      type="submit"
                      onClick={(e) => addToCart(e, product)}
                      className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                      <PlusSmIconOutline className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
