import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="items-center justify-between px-4 py-5 pl-6 mx-auto border-b-2 border-gray-200 md:flex max-w-7xl">
      <div className="flex">
        <div>
          <img
            src="images/icons/ableton-icon.svg"
            className="block w-auto h-7"
          />
        </div>
        <Menu className="mx-10">
          <Menu.Button>
            <div className="z-20 flex flex-row ">
              <p className="font-semibold">Menu</p>
              <ChevronDownIcon className="w-4 h-auto pt-1" />
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="font-semibold text-white">
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-abletonBlue">
                  <div className="flex px-4 py-5 pl-6">
                    <div>
                      <img
                        src="images/icons/ableton-icon.svg"
                        className="block w-auto h-7"
                      />
                    </div>
                    <div className="z-20 flex flex-row mx-10 ">
                      <p className="font-semibold">Menu</p>
                      <ChevronDownIcon className="w-4 h-auto pt-1" />
                    </div>
                  </div>
                  <ul className="flex flex-col items-start gap-6 px-3.5  font-semibold text-mediumFont ">
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
                      <a href="#">Try Live for free</a>
                    </li>
                    <div>
                      <ul className="flex flex-col items-start text-xs gap-y-4">
                        <li>
                          <a href="#">Account</a>
                        </li>
                        <li>
                          <a href="#">Log Out</a>
                        </li>
                      </ul>
                    </div>
                    <li>
                      <a href="#">More on Ableton.com</a>
                    </li>
                    <div>
                      <ul className="flex flex-col items-start text-xs gap-y-4">
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Ableton for the Classroom</a>
                        </li>
                        <li>
                          <a href="#">Ableton for Colleges and Universities</a>
                        </li>
                        <li>
                          <a href="#">Certified Training</a>
                        </li>
                        <li>
                          <a href="#" className="text-abletonOrange">
                            About Ableton
                          </a>
                        </li>
                        <li>
                          <a href="#">Jobs</a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </Menu.Items>
            </Transition>
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
