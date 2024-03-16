"use client";
import { useEffect } from "react";
import Layout from "../sheared/layout";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import Link from "next/link";
const Home = () => {

  const Resume = () => {
    if (!sessionStorage.getItem("download")) {
      const a = document.createElement("A");
      a.href = "/pdf/NITISH KUMAR.pdf";
      a.download = "Nitishkumar.pdf";
      a.click();
      sessionStorage.setItem("download", "already saved");
    } else {
      return false;
    }
  };
  useEffect(() => Resume, []);

const Download = () => {
  const a = document.createElement("A");
  a.href = "/pdf/NITISH KUMAR.pdf";
  a.download = "Nitishkumar.pdf";
  a.click();
}



  const menuicon = [
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/nitish-kumar-33b6062a7/",
    },
    {
      icon: <IoLogoTwitter />,
      path: "https://twitter.com/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/Nitishkumar63",
    },
    {
      icon: <FaFacebookF />,
      path: "https://www.facebook.com/",
    },
  ];

  return (
    <Layout success='home'>
      <div className="flex justify-center mt-5 lg:py-5">
        <div className="flex flex-col gap-5  text-center">
          <div className="border-2 shadow-lg rounded-full w-[300px] h-[300px]">
            <Image
              src="/images/nitishkumar.jpg"
              width={300}
              height={300}
              alt="myimage"
              className="rounded-full w-[300px] h-[300px]"
            />
          </div>
          <div>
            <h1 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl">Nitish Kumar</h1>
            <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-purple-500 text-xl">
              Full Stack Mern Developer
            </h1>
          </div>
          <div className="flex gap-x-3 justify-center">
            {menuicon &&
              menuicon.map((item, index) => (
                <div key={index}>
                 <Link href={item.path} target="_blank">
                 <button className="bg-white p-3 transition transform hover:-translate-y-1 text-black-600 rounded-md  text-lg hover:text-white   bg-gradient-to-b from-pink-400 to-red-300 hover:to-emerald-500 shadow-md">
                    {item.icon}
                  </button>
                 </Link>
                </div>
              ))}
          </div>
          <div className="flex gap-x-3 justify-center">
            <button
              onClick={Download}
              className=" p-2 w-[250px] h-[50px] rounded-full gap-x-3 hover:bg-gradient-to-t  hover:to-blue-500 flex items-center px-5 item-center justify-center font-semibold text-lg  text-white bg-gradient-to-b from-purple-900 to-pink-500 shadow-md"
            >
              <Image
                src="/images/download.png"
                alt="download"
                width={20}
                height={20}
              />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
