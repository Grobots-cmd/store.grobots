"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  About: "/about",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-opacity duration-200 focus:outline-none hover:opacity-70 text-sm font-medium tracking-tight"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-x-[-100%]"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-[-100%]"
              >
                <PopoverPanel className="flex flex-col fixed w-full sm:w-2/5 lg:w-1/3 2xl:w-1/4 h-screen z-50 inset-y-0 left-0 text-sm bg-white">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-white border-r border-black/10"
                  >
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center p-8 border-b border-black/10">
                      <span className="text-lg font-semibold uppercase tracking-tight">Menu</span>
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="hover:opacity-70 transition-opacity duration-200 p-2"
                      >
                        <XMark className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex flex-col justify-center px-8">
                      <ul className="flex flex-col gap-6 items-start">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name} className="w-full">
                              <LocalizedClientLink
                                href={href}
                                className="text-4xl md:text-5xl font-semibold leading-tight hover:opacity-70 transition-opacity duration-200 inline-block tracking-tighter"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                {name}
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    {/* Footer Section */}
                    <div className="flex flex-col gap-y-6 p-8 border-t border-black/10">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                      </div>
                      <Text className="text-black/50 text-xs font-medium tracking-tight">
                        © {new Date().getFullYear()} Grobots. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu