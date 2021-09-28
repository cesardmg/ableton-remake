import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="items-center justify-between px-4 py-5 pl-6 mx-auto border-b-2 border-gray-200 md:flex max-w-7xl">
      <div className="flex ">
        <div>
          <img
            src="images/icons/ableton-icon.svg"
            className="block w-auto h-7"
          />
        </div>
        <Menu className="mx-10">
          <Menu.Button>
            <div className="flex flex-row ">
              <p className="font-semibold">Menu</p>
              <ChevronDownIcon className="w-4 h-auto pt-1" />
            </div>
          </Menu.Button>
        </Menu>
      </div>
    </header>
  );
}

{
  /* <header className="items-center justify-between px-4 py-5 pl-6 mx-auto border-b-2 border-gray-200 md:flex max-w-7xl">
      <div className="flex px-4">
        <div>
          <img
            src="images/icons/ableton-icon.svg"
            className="block w-auto h-7"
          />
        </div>
        <ul className="flex items-center gap-10 pl-10 font-semibold text-mediumFont ">
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Push</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Packs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#" className="font-semibold text-abletonOrange">
              More +
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-6 pr-6 font-semibold ">
          <li>
            <a
              href="#"
              className="font-semibold text-mediumFont text-abletonBlue"
            >
              Try Live for free
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </header> */
}
