import { useDropdowns } from '../utils/useDropdowns';

export const Search = () => {
  const { openDropdown, toggleDropdown, dropdownRefs, dropdowns } = useDropdowns();

  return (
    <div className="min-h-[60vh] search-bg p-6">
      <h1 className="text-(--color-off-white) font-inria-serif-bold text-3xl text-center py-8 pb-12 lg:text-4xl">
        FIND YOUR DREAM HOME
      </h1>
      <div className="bg-white rounded py-6 max-w-[140vh] min-h-[34vh] lg:mx-auto">
        <div className="text-(--color-blue) font-inria-serif-bold text-2xl text-center py-6 pb-8 lg:text-start lg:px-6 lg:text-4xl lg:pb-10">
          Browse Properties
        </div>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {dropdowns.slice(0, 4).map((dropdown) => (
            <div
              key={dropdown.id}
              ref={(el) => (dropdownRefs.current[dropdown.id] = el)}
              className="relative"
            >
              <button
                onClick={() => toggleDropdown(dropdown.id)}
                className="w-full px-0 py-3 bg-white border-b-2 border-gray-200 flex items-center justify-between hover:border-gray-400 transition-colors text-left font-inria-sans-regular"
              >
                <span className="text-sm text-(--color-off-black)">{dropdown.label}</span>
                <img
                  src={`/assets/search/caret-${openDropdown === dropdown.id ? 'up' : 'down'
                    }.svg`}
                  alt="toggle"
                  className="w-4 h-4"
                />
              </button>
              {openDropdown === dropdown.id && (
                <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto font-inria-sans-regular">
                  <li className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-sm">
                    {dropdown.label}
                  </li>
                </ul>
              )}
            </div>
          ))}
          <div className="mt-3">
            <p className="font-inria-sans-regular text-sm text-(--color-off-black)">Minimum Price</p>
            <input
              type="text"
              placeholder="Enter Price"
              className="w-full px-0 mt-1  bg-white border-b-2 border-gray-200 hover:border-gray-400 transition-colors text-sm text-gray-700 focus:outline-none focus:border-gray-400 placeholder-gray-700 font-inria-sans-regular"
            />
          </div>

          <div className="mt-3">
            <p className="font-inria-sans-regular text-sm text-(--color-off-black)">Maximum Price</p>
            <input
              type="text"
              placeholder="Enter Price"
              className="w-full px-0 mt-1 bg-white border-b-2 border-gray-200 hover:border-gray-400 transition-colors text-sm text-gray-700 focus:outline-none focus:border-gray-400 placeholder-gray-700 font-inria-sans-regular"
            />
          </div>

          <div
            ref={(el) => (dropdownRefs.current['sort'] = el)}
            className="relative mt-3"
          >
            <button
              onClick={() => toggleDropdown('sort')}
              className="w-full px-0 pb-3 lg:pb-6 bg-white border-b-2 border-gray-200 flex items-center justify-between hover:border-gray-400 transition-colors text-left font-inria-sans-regular"
            >
              <span className="text-(--color-off-black) text-sm">Sort By</span>
              <img
                src={`/assets/search/caret-${openDropdown === 'sort' ? 'up' : 'down'
                  }.svg`}
                alt="toggle"
                className="w-4 h-4"
              />
            </button>
            {openDropdown === 'sort' && (
              <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto font-inria-sans-regular">
                <li className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-sm">
                  Sort By
                </li>
              </ul>
            )}
          </div>
          <div>
            <button className="bg-(--color-dark-blue) text-(--color-off-white) w-full px-12 py-1 font-inria-sans-bold rounded-lg mt-3 lg:mt-5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};