import React from 'react'
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropdownBtn: React.FC = () => {
    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <MenuButton className="rounded-full w-full font-[kanit] md:text-sm scale-y-90 tracking-tight leading-none bg-transparent border border-gray-600 hover:border-transparent md:px-2.5 py-0.5 lowercase transition-colors cursor-pointer">
                    more
                    <ChevronDownIcon aria-hidden="true" className="-mr-3 size-4 inline-block" />
                </MenuButton>
            </div>
            <MenuItems transition className="absolute z-10 mt-1 w-full origin-top-right rounded-full font-inter lowercase md:text-sm scale-y-90 tracking-tight leading-none bg-transparent border border-gray-600 hover:border-transparent md:px-2.5 py-0.5 ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div>
                    <a href="#" className="block px-4 py-0.5 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">License</a>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default DropdownBtn;