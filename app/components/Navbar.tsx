"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./../../public/assets/logo.png";
import { IoMenuOutline, IoClose, IoSearch } from "react-icons/io5";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    name: "Abous Us",
  },
  {
    id: 2,
    name: "Our Product",
  },
  {
    id: 3,
    name: "Our Sellers",
  },
  {
    id: 4,
    name: "Media",
  },
  {
    id: 5,
    name: "Contact Us",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-3 bg-gray-800 flex items-center justify-between md:px-8 lg:px-[10%]">
      <div className="flex items-center gap-3">
        <div
          onClick={() => setOpen(!open)}
          className="bg-gray-600 rounded-md p-0.5 lg:hidden"
        >
          <IoMenuOutline color="white" size={30} />
        </div>
        <Image src={logo} alt="Logo" className="w-40" />
      </div>
      <div className="lg:hidden">
        <IoSearch color="white" size={30} />
      </div>
      <div className="hidden lg:flex text-gray-100 gap-5 items-center">
        {navLinks.map((link) => (
          <Link
          key={link.id}
            href={"/"}
            className="text-sm text-gray-300 hover:text-gray-100 duration-200"
          >
            {link.name}
          </Link>
        ))}
        <div className="hidden lg:block">
          <IoSearch color="white" size={25} />
        </div>
      </div>

      {/* sidebar */}
      {open ? (
        <>
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-0 left-0 bg-gray-950 w-full h-screen opacity-50 z-10"
          ></div>
          <div className="bg-gray-900 w-8/12 absolute z-20 top-0 left-0 p-5 h-screen">
            <Image src={logo} alt="Logo" className="w-32" />
            <hr className="bg-white mt-3 mb-5" />
            <div className="text-white flex flex-col mt-3">
              {navLinks.map((l) => (
                <>
                  <Link
                  key={l.id}
                    href={"/"}
                    className="text-sm text-gray-300 hover:text-gray-100 duration-200"
                  >
                    {l.name}
                  </Link>
                  <hr className="bg-gray-300 my-2" />
                </>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}
