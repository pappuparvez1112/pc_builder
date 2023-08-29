import Link from "next/link";
import Dropdown from "./Dropdown";

// const sidebarOptions = [
//   {
//     name: "CPU / Processor",
//     href: "/cpu",
//   },
//   {
//     name: "Motherboard",
//     href: "/motherboard",
//   },
//   {
//     name: "RAM",
//     href: "/ram",
//   },
//   {
//     name: "Power Supply Unit",
//     href: "/powersupply",
//   },
//   {
//     name: "Storage Device",
//     href: "/storageDevice",
//   },
//   {
//     name: "Monitor",
//     href: "/monitor",
//   },
//   {
//     name: "Mouse",
//     href: "/mouse",
//   },
// ];

const Category = () => {
  return (
    <>
      {/* <div className=" bg-white">
        <div class="relative inline-block text-left ms-14 mt-8">
          <div>
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-orange-300 rounded-md text-gray-700 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="dropdown-button"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="dropdown-button-label"
            >
              Catagories
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 border "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            <div class="py-1 ms-16 " role="none">
              <Link href="/cpu">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300 border-t-2"
                  role="menuitem"
                >
                  Cpu
                </items>
              </Link>
              <Link href="/monitor">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300 "
                  role="menuitem"
                >
                  Monitor
                </items>
              </Link>
              <Link href="/ram">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300"
                  role="menuitem"
                >
                  Ram
                </items>
              </Link>
              <Link href="/motherboard">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300"
                  role="menuitem"
                >
                  MotherBoard
                </items>
              </Link>
              <Link href="/powersupply">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300"
                  role="menuitem"
                >
                  PowerSupply
                </items>
              </Link>
              <Link href="/storageDevice">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300"
                  role="menuitem"
                >
                  StorageDevice
                </items>
              </Link>
              <Link href="/mouse">
                <items
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white border border-solid border-gray-300"
                  role="menuitem"
                >
                  Mouse
                </items>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <Dropdown buttonText="Categories">
        <Link
          href="/cpu"
          className="block px-4 ms-4 py-2 text-sm text-gray-900 hover:bg-orange-300"
        >
          Cpu
        </Link>
        <Link
          href="/ram"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          Ram
        </Link>
        <Link
          href="/monitor"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          Monitor
        </Link>
        <Link
          href="/motherboard"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          MotherBoard
        </Link>
        <Link
          href="/storageDevice"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          Storage Device
        </Link>
        <Link
          href="/powersupply"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          PowerSupply
        </Link>
        <Link
          href="/mouse"
          className="block px-4 ms-4 py-2 text-sm  text-gray-900 hover:bg-orange-300"
        >
          Mouse
        </Link>
      </Dropdown>
    </>
  );
};

export default Category;
