import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";
const logo = require('../img/logo.png');


export default function Header(props) {
  function goToCheckout() {
    props.setCheckout(true);
  }
  function leaveCheckout() {
    props.setCheckout(false);
  }
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1 flex">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-14 w-auto"
                  src={logo}
                  alt=""
                  onClick={() => leaveCheckout()}
                />
              </a>
            </div>

            <div className="flex-1 flex items-center justify-end">
              {/* Search */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-6 h-6" aria-hidden="true" />
              </a>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-8">
                <a href="#" className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                    onClick={() => goToCheckout()}
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {props.shoppingCart.length}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
