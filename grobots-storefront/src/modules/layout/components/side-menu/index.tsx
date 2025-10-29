"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
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
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base text-lg font-semibold hover:scale-110"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-x-[-100%]"
                enterTo="opacity-100 translate-x-0 backdrop-blur-2xl"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0 backdrop-blur-2xl"
                leaveTo="opacity-0 translate-x-[-100%]"
              >
                <PopoverPanel className="flex flex-col fixed w-full sm:w-2/5 lg:w-1/3 2xl:w-1/4 h-screen z-50 inset-y-0 left-0 text-sm text-white backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl border-r border-white/10"
                  >
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center p-8 border-b border-white/10">
                      <span className="text-2xl font-bold uppercase tracking-tight">Navigation</span>
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="hover:scale-110 transition-transform hover:rotate-90 duration-300 p-2 hover:bg-white/10 rounded-full"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex flex-col justify-center px-8">
                      <ul className="flex flex-col gap-8 items-start">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name} className="w-full group">
                              <LocalizedClientLink
                                href={href}
                                className="text-5xl md:text-6xl font-bold leading-tight hover:text-white/60 transition-all duration-300 hover:translate-x-4 inline-block relative"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                {name}
                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    {/* Footer Section */}
                    <div className="flex flex-col gap-y-6 p-8 border-t border-white/10 bg-black/30">
                      <div
                        className="flex justify-between items-center hover:bg-white/5 p-3 rounded-lg transition-all cursor-pointer"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-300 w-5 h-5",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-white/60 text-sm font-medium">
                        © {new Date().getFullYear()} Medusa Store. All rights reserved.
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