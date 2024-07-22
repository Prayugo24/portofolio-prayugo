"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


import { LINKS, NAV_LINKS,NAV_LINKS_MOBILE, SOCIALS } from "@/utils/constants";
import MenuLink from "./menuLink/menuLink";

export const Navbar = () => {
    useEffect(() => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      console.log('mobileMenuButton:', mobileMenuButton);
      console.log('mobileMenu:', mobileMenu);

      const toggleMobileMenu = () => {
        console.log('Button clicked');
        if (mobileMenu) {
          mobileMenu.classList.toggle('hidden');
          console.log('Menu toggled');
        }
      };

      if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
      }

      // Cleanup event listener on component unmount
      return () => {
        if (mobileMenuButton) {
          mobileMenuButton.removeEventListener('click', toggleMobileMenu);
        }
      };
    }, []);
    return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#00ff003d] bg-[#002b36b0] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/meow7.webp"
              alt="Logo"
              width={60}
              height={60}
              draggable={false}
              className="cursor-pointer hover:animate-slowspin"
              />
            <div className="font-bold ml-[10px] hidden md:block text-gray-300">
              Prayugo Dwi Setiyoko
            </div>
          </Link>

          <div className="hidden md:flex w-[530px] h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {NAV_LINKS.map((link,index) => (
                <MenuLink item={link} key={link.title+index}/>
              ))}

            </div>
          </div>

          <div className="flex flex-row gap-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-6 w-6 text-white" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button" className="text-white">
              {/* You can replace this with a menu icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="bg-[rgba(3,0,20,0.37)] p-4 rounded-lg shadow-lg text-gray-200">
            {NAV_LINKS_MOBILE.map((link) => (
              <MenuLink item={link}/>
            ))}
          </div>
        </div>
      </div>
    )
}
