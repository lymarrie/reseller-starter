import * as React from "react";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { formatPhoneNumber } from "react-phone-number-input";

export interface HeaderProps {
  data?: any;
}

const navigation = [
  // { name: "Home", href: "/index.html" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Hours", href: "#hours" },
  // { name: "Contact", href: "/index.html" },
  // { name: "About", href: "/about" },
];

const Header = ({ data }: HeaderProps) => {

  const phone = data.mainPhone;
  const email = data.emails[0];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-14 w-auto" src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc" alt="" />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="tracking-tight font-bold leading-6 text-gray-800">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex justify-around space-x-8">
          <a href={`tel:${phone}`} className="tracking-tight font-bold leading-6 text-gray-900 hover:text-gray-700 ">
            {formatPhoneNumber(phone)}
          </a>
          <a href={`mailto: ${email}`} className="tracking-tight font-bold leading-6 text-gray-900 hover:text-gray-700">
            {email}
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto"
                src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <a href={`tel:${phone}`} className="tracking-tight font-bold leading-6 text-gray-900 hover:text-gray-700 ">
                      {formatPhoneNumber(phone)}
                </a>
                <a href={`mailto: ${email}`} className="tracking-tight font-bold leading-6 text-gray-900 hover:text-gray-700">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )

  // return (
  //   <Disclosure as="nav" className="bg-white shadow">
  //     {({ open }) => (
  //       <>
  //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //           <div className="flex h-24 justify-between">
  //             <div className="flex">
  //               <div className="-ml-2 mr-2 flex items-center md:hidden">
  //                 {/* Mobile menu button */}
  //                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
  //                   <span className="sr-only">Open main menu</span>
  //                   {open ? (
  //                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
  //                   ) : (
  //                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  //                   )}
  //                 </Disclosure.Button>
  //               </div>
  //               <div className="flex flex-shrink-0 items-center">
  //                 <img
  //                   className="block lg:hidden"
  //                   src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
  //                   alt="Your Company"
  //                   width="50"
  //                   height="50"
  //                 />
  //                 <img
  //                   className="hidden lg:block"
  //                   src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
  //                   alt="Your Company"
  //                   width="50"
  //                   height="50"
  //                 />
  //               </div>
  //               <div className="hidden md:ml-6 md:flex md:space-x-4">
  //                 {navigation.map((link) => (
  //                   <Cta
  //                     key={link.href}
  //                     buttonText={link.name}
  //                     url={link.href}
  //                     style="inline-flex items-center border-b-4 rounded-none border-transparent hover:border-black"
  //                   />
  //                 ))}
  //               </div>
  //             </div>
  //             <div className="flex items-center space-x-5">
  //               <Cta
  //                 buttonText="Link 1"
  //                 url="#"
  //                 style="text-white bg-black shadow-md"
  //               />
  //               <Cta
  //                 buttonText="Link 2"
  //                 url="#"
  //                 style="text-white bg-gray-600 shadow-md"
  //               />
  //             </div>
  //           </div>
  //         </div>

  //         <Disclosure.Panel className="md:hidden">
  //           <div className="space-y-1 pt-2 pb-3">
  //             {navigation.map((link) => (
  //               <Disclosure.Button
  //                 key={link.href}
  //                 as="a"
  //                 href={link.href}
  //                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
  //               >
  //                 {link.name}
  //               </Disclosure.Button>
  //             ))}
  //           </div>
  //         </Disclosure.Panel>
  //       </>
  //     )}
  //   </Disclosure>
  // );

  

};

export default Header;
