'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/Button.tsx"
import { useState, useEffect } from "react"
import { table } from "console"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen)
  
    
  }, [isOpen])
  

  return (
    <nav className=" flexBetween max-container  padding-container relative z-50 py-5  ">
        <Link href="/">
            <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className=" h-full gap-12 lg:flex hidden"> 
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="./user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="./menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => {toggleMenu()}}
        />

        {isOpen && (
          <div 
            className="absolute top-16 right-0 lg:hidden bg-gray-100 shadow- rounded-xl h-[90vh] z-50 w-[250px] flex flex-col justify-between" 
            onClick={() => {toggleMenu()}}>
            <ul className="flex flex-col space-y-2 p-4">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
             ))}
            </ul>
            <div>
              <Button
              type="button"
              title="Login"
              icon="./user.svg"
              variant="btn_dark_green"
          />
            </div>
          </div>
        )}


    </nav>
  )
}

export default Navbar