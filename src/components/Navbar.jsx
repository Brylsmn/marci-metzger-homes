import { useNavbar } from '../utils/useNavbar';

export const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useNavbar();

  return (
    <div className="p-6">
      <nav className="bg-(--color-off-white) shadow rounded-lg relative z-50">
        <div className="flex flex-row justify-between px-4 py-3">
          <img
            src="../assets/navbar/logo.webp"
            alt="marci-metzger-logo"
            className="w-[150px] h-[55px]"
          />

          <ul className="hidden lg:flex lg:flex-row lg:items-center lg:gap-8 font-inria-sans-regular">
            <li className="hover:text-(--color-dark-blue) transition-colors cursor-pointer">
              HOME
            </li>
            <li className="hover:text-(--color-dark-blue) transition-colors cursor-pointer">
              LISTINGS
            </li>
            <li className="hover:text-(--color-dark-blue) transition-colors cursor-pointer">
              LET'S MOVE
            </li>
            <li className="hover:text-(--color-dark-blue) transition-colors cursor-pointer">
              ABOUT US
            </li>
            <li>
              <button className="bg-(--color-dark-blue) text-white font-inria-sans-bold py-2 px-6 rounded hover:bg-(--color-blue) transition-colors">
                CALL NOW
              </button>
            </li>
          </ul>

          <img
            src={isMenuOpen ? "../assets/navbar/close-svg.svg" : "../assets/navbar/hamburger-svg.svg"}
            alt={isMenuOpen ? "close-menu" : "open-menu"}
            className="w-[35px] h-[35px] mt-2 cursor-pointer hover:opacity-70 transition-opacity lg:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`lg:hidden absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="font-inria-sans-regular text-center">
            <li className="py-3 px-6 hover:bg-gray-200 transition-colors cursor-pointer border-b border-gray-200">
              Home
            </li>
            <li className="py-3 px-6 hover:bg-gray-200 transition-colors cursor-pointer border-b border-gray-200">
              Listings
            </li>
            <li className="py-3 px-6 hover:bg-gray-200 transition-colors cursor-pointer border-b border-gray-200">
              Let's Move
            </li>
            <li className="py-3 px-6 hover:bg-gray-200 transition-colors cursor-pointer border-b border-gray-200">
              About Us
            </li>
            <li className="px-6 py-4">
              <button className="w-full bg-(--color-dark-blue) text-white font-inria-sans-bold py-3 px-6 rounded hover:bg-(--color-blue) transition-colors shadow-md">
                CALL NOW
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};