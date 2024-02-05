import Layout from "../sheared/layout";
import { IoBagHandle } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import Image from "next/image";

const Resume = () => {
  return (
    <Layout success="resume">
      <div className="flex justify-center lg:mt-10 md:mt-2 lg:py-5">
        <div className="w-[1300px] bg-white rounded-xl p-[50px] shadow-md ">
          <div className="flex gap-x-5 items-center mb-10">
            <h1 className="text-4xl font-bold">Resume</h1>
            <hr className="w-[200px] border-[#EC3C63] border" />
          </div>

          <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-semibold gap-x-2 text-orange-600 flex items-center">
              <LuGraduationCap className="text-3xl text-[#EC3C63]" />
              Technical Skills
            </h1>
            <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-x-10">
              <div className="bg-[#EEF5FA] p-5 mb-5 ">
                <h1 className="text-xl font-semibold mb-3 text-orange-600">
                  Frontend And Ui
                </h1>
                <div className="flex  justify-between">
                  <div className="mb-5">
                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/w3_html5-icon.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className=" max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Html & Css
                      </h1>
                    </div>

                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/tailwindcss-icon.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Tailwind
                      </h1>
                    </div>

                    <div className=" flex gap-x-3">
                      <Image
                        src={"/image/icons8-bootstrap-48.png"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Bootstrap
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="mb-5 flex gap-x-3">
                      <Image
                        src={"/image/material-ui-1.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Material-Ui
                      </h1>
                    </div>

                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/adobe-xd-icon.png"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Adobe XD
                      </h1>
                    </div>

                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/figma-icon.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Figma
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-5 ">
                <h1 className="text-xl font-semibold mb-3 text-orange-600">
                  Javascript Framework And Library
                </h1>
                <div>
                  <div className="mb-5">
                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/react.png"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        React.js And Next.js
                      </h1>
                    </div>

                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/KDpgvguMpGfqaHPjicRK.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="text-lg font-semibold text-gray-500">
                        Ant Design And Material-Ui
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-5 ">
                <h1 className="text-xl font-semibold mb-3 text-orange-600">
                  Devops And Project Management Tools
                </h1>
                <div>
                  <div className="mb-5">
                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/aws.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        AWSCloud
                      </h1>
                    </div>

                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/jira-icon.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Jira
                      </h1>
                    </div>

                    <div className=" flex gap-x-3">
                      <Image
                        src={"/image/icons8-github-50.png"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Github & Git
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-5 ">
                <h1 className="text-xl font-semibold mb-3 text-orange-600">
                  Databases(Managed,Unmanged)
                </h1>
                <div>
                  <div className="mb-5">
                    <div className=" flex gap-x-3">
                      <Image
                        src={"/image/mysql-ar21.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        MySql
                      </h1>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/mongodb-icon.svg"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        MongoDB
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-5 ">
                <h1 className="text-xl font-semibold mb-3 text-orange-600">
                  Backend And ServerSide
                </h1>
                <div>
                  <div className="mb-5">
                    <div className="mb-5  flex gap-x-3">
                      <Image
                        src={"/image/icons8-nodejs-48.png"}
                        width={30}
                        height={30}
                        alt="html"
                      />
                      <h1 className="max-md:text-[17px] md:text-lg font-semibold text-gray-500">
                        Nodejs,Express
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 ">
            <h1 className="text-3xl font-semibold gap-x-2 text-orange-600 flex items-center">
              <LuGraduationCap className="text-3xl text-[#EC3C63]" />
              Experience
            </h1>
            <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-x-10">
              <div className="bg-[#EEF5FA] p-5 mb-5 flex flex-col ">
                <h1 className="text-gray-500 font-semibold ">
                  Jun 2021 to Oct 2021
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Guarented - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  Rent Furniture & Home Appliances in Bangalore. Get best
                  quality Bed, Washing Machine, Refrigerator, Sofa, Mattress, TV
                  & Dining Tables on rent from .
                </h1>
              </div>
              <div className="bg-[#EEF5FA] p-5 mb-10">
                <h1 className="text-gray-500 font-semibold ">
                  Nov 2021 to Apr 2022
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Zieeinterio - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  With an experienced and skilled contracting team, Zee Interior
                  as best interior designer in Patna is able to make sure exact
                  craftsmanship,
                </h1>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-10">
                <h1 className="text-gray-500 font-semibold ">
                  May 2022 to Sep 2022
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Grandkalingahotel - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  A luxurious 48 rooms Boutique hotel located right at the city
                  center with easy connectivity to the airport, metro , bus or
                  railway station.
                </h1>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-10">
                <h1 className="text-gray-500 font-semibold ">
                  Oct 2022 to Mar 2023
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Foxihotels - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  Welcome to Foxi Hotels, where comfort and tranquility await
                  you in the heart of Mahipalpur, Delhi. Our premium hotel rooms
                  provide the perfect oasis for both
                </h1>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-10">
                <h1 className="text-gray-500 font-semibold ">
                  Apr 2023 to Jul 2023
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Showmaqers - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  Our innovative approach to planning memorable events,
                  unmatched creativity and extraordinary attention to details ,
                  combined with our professionalism
                </h1>
              </div>

              <div className="bg-[#EEF5FA] p-5 mb-10">
                <h1 className="text-gray-500 font-semibold ">
                  Aug 2023 to Dec 2023
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Igp - Techsunset
                </h1>
                <h1 className="text-gray-500 text-justify font-semibold">
                  Order Fresh Flowers, Cakes, Personalized & Handpicked Gifts
                  Hampers. Shop Now! Easy & Secure Payment. Worldwide Free
                  Shipping* Midnight Delivery.
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-semibold gap-x-2 text-orange-600 flex items-center">
              <IoBagHandle className="text-3xl text-[#EC3C63]" /> Education
            </h1>
            <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-x-10">
              <div className="bg-[#FFF4F4] p-5 mb-5">
                <h1 className="font-semibold text-lg mb-1 text-blue-600">
                  COURSES & CERTIFICATIONS
                </h1>
                <h1 className="text-gray-500 font-semibold">Year - 2020-21</h1>
                <h1 className="text-gray-500 font-semibold">
                  Mern Stack Web Development
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  Institute - Wap Institute
                </h1>
                <h1 className="text-gray-500 font-semibold">With Grade A+</h1>
              </div>
              <div className="bg-[#FFF4F4] p-5 mb-10">
                <h1 className="font-semibold text-lg mb-1 text-blue-600">
                  Bachelor Degree
                </h1>
                <h1 className="text-gray-500 font-semibold">Year - 2019-22</h1>
                <h1 className="text-gray-500 font-semibold">
                  University - Veer Kunwar Singh University
                </h1>
                <h1 className="text-gray-500 font-semibold">
                  With percentage(70%)
                </h1>
              </div>

              <div className="bg-[#FFF4F4] p-5 mb-10">
                <h1 className="font-semibold text-lg mb-1 text-blue-600">
                  Intermediate
                </h1>
                <h1 className="text-gray-500 font-semibold">Year - 2017-19</h1>
                <h1 className="text-gray-500 font-semibold">BSEB PATNA</h1>
                <h1 className="text-gray-500 font-semibold">
                  With percentage(61.5%))
                </h1>
              </div>

              <div className="bg-[#FFF4F4] p-5 mb-10">
                <h1 className="font-semibold text-lg mb-1 text-blue-600">
                  Matriculation
                </h1>
                <h1 className="text-gray-500 font-semibold">Year - 2016-17</h1>
                <h1 className="text-gray-500 font-semibold">BSEB PATNA</h1>
                <h1 className="text-gray-500 font-semibold">
                  With percentage(51%))
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
