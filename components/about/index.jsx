import Layout from "../sheared/layout";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import Image from "next/image";

const About = () => {
  return (
    <Layout success="about">
      <div className="flex justify-center lg:mt-10 md:mt-2 lg:py-5">
        <div className="w-[1300px] bg-white rounded-xl p-[50px] shadow-md ">
          <div className="flex gap-x-5 items-center mb-10">
            <h1 className="text-4xl font-bold">About</h1>
            <hr className="w-[200px] border-[#EC3C63] border" />
          </div>

          <div className="grid lg:grid-cols-3 max-lg:grid-cols-1 lg:gap-20">
            <div className="flex max-lg:justify-center mb-5">
              
                <Image
                  src="/images/nitish.png"
                  alt="myphoto"
                  width={400}
                  height={50}
                  className="rounded-2xl"
                />
            
            </div>
            <div className="col-span-2">
              <div className="flex flex-col ">
                <h1 className="font-semibold text-[16px] text-justify mb-5 text-gray-700">
                  A seasoned Full-Stack MERN (MongoDB, Express.js, React,
                  Node.js) Developer with a proven track record of creating
                  robust web applications. Proficient in both front-end and
                  back-end development, I specialize in delivering user-friendly
                  and scalable solutions. My expertise lies in harnessing the
                  power of MongoDB for efficient data management, utilizing
                  Express.js for seamless server-side operations, implementing
                  dynamic and responsive user interfaces with React, and
                  orchestrating it all with the powerful Node.js runtime. I
                  bring a wealth of experience to the table, ensuring the
                  successful development and deployment of comprehensive web
                  solutions that meet the highest standards of performance and
                  user satisfaction.
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-xl">Personal Info</h1>
                <div className="grid md:grid-cols-2 max-md:grid-cols-1 mb-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                      <FaMobileAlt className="text-red-500 text-2xl" />
                    </div>

                    <div className="flex flex-col ">
                      <h1 className="font-semibold text-sm text-gray-500">
                        Phone
                      </h1>
                      <h1 className="font-semibold text-[16px]">
                        +91 9955050869
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                      <IoLocation className="text-red-500 text-2xl" />
                    </div>

                    <div className="flex flex-col ">
                      <h1 className="font-semibold text-sm text-gray-500">
                        Location
                      </h1>
                      <h1 className="font-semibold text-[16px]">Bihar</h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                      <MdOutlineMail className="text-red-500 text-2xl" />
                    </div>

                    <div className="flex flex-col ">
                      <h1 className="font-semibold text-sm text-gray-500">
                        Email
                      </h1>
                      <h1 className="font-semibold text-[16px]">
                        nitishkumar6203375@gmail.com
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                      <CgCalendarDates className="text-red-500 text-2xl" />
                    </div>

                    <div className="flex flex-col ">
                      <h1 className="font-semibold text-sm text-gray-500">
                      Birthday
                      </h1>
                      <h1 className="font-semibold text-[16px]">
                      Apr 09, 2001
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
