"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { RiContactsBookLine } from "react-icons/ri";
import { MdOutlinePalette } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Drawer } from "antd";
import { FaRegUser } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Layout = ({ children, success }) => {
  const [open, setOpen] = useState(false);

  const menu = [
    {
      label: "Home",
      path: "/",
      icon: <MdOutlineHome className="text-xl" />,
    },
    {
      label: "About",
      path: "/about-us",
      icon: <FaRegUser className="text-lg" />,
    },
    {
      label: "Resume",
      path: "/resume",
      icon: <TiDocumentText className="text-xl" />,
    },
    {
      label: "Works",
      path: "/portfolio",
      icon: <MdOutlinePalette className="text-xl " />,
    },
    {
      label: "Contact",
      path: "/contact-us",
      icon: <RiContactsBookLine className="text-xl " />,
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

 

  return (
    <>
      <div className="w-full min-h-screen bg-[url('/images/bg.jpg')] bg-cover">
        <div className="flex justify-center items-center">
          <div className="w-[1400px] max-sm:p-3 p-2 lg:pt-10 md:px-10">
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                <Image
                  src="/image/nitishlogo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500">Nitish Kumar</h1>
              </div>
              <div className="lg:hidden max-lg:block">
                <button
                  onClick={showDrawer}
                  className="w-[50px] p-3 h-[50px] flex justify-center items-center rounded-full bg-blue-500"
                >
                  <FaBars className="text-2xl text-white" />
                </button>
              </div>

              <Drawer
                closable={false}
                onClose={onClose}
                open={open}
                width={500}
              >
                <button
                  onClick={onClose}
                  className="w-[50px] mb-10 p-3 h-[50px] flex justify-center items-center rounded-full bg-blue-700"
                >
                  <IoMdCloseCircleOutline className="text-5xl text-white" />
                </button>

                <div className="flex-col flex justify-center">
                  {menu.map((item, i) => (
                    <div key={i}>
                      <Link href={item.path}>
                        <button
                          className={`bg-red-500 text-white  p-2 mb-5 rounded-md gap-x-1  flex items-center px-5 item-center justify-center font-semibold text-sm hover:text-white hover:bg-[#EC3C63] shadow-md `}
                        >
                          {item.icon} {item.label}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </Drawer>

              <div className="hidden lg:block">
                <div className="flex gap-x-8">
                  {menu.map((item, i) => (
                    <div key={i}>
                      <Link href={item.path}>
                        <button 
                          className={`bg-white p-2 rounded-md gap-x-1 text-gray-500 flex  px-5 item-center justify-center font-semibold text-sm hover:text-white hover:bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500  shadow-md ${
                            (success.toLocaleLowerCase() === item.label.toLocaleLowerCase()) ? 'text-red-500' : 'null'
                          }`}
                        >
                          {item.icon} {item.label}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>{children}</section>
      </div>
    </>
  );
};

export default Layout;
