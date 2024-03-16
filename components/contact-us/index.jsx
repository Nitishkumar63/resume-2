"use client";
import Layout from "../sheared/layout";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_LOCAL_CLIENT ;
import { FaMobileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (value) => {
    try {
      console.log(value)
      const {data} = await axios.post("/api/mail", value);
      console.log(data)
      message.success("Send Email Successfully");
    } catch (error) {
      console.log(error.message)
      message.error("Message Falied !");
    } finally {
      form.resetFields();
    }
  };


  

  return (
    <Layout success="contact">
      <div className="flex justify-center lg:mt-10 md:mt-2 lg:py-5">
        <div className="w-[1300px]  rounded-lg p-[50px]   bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
          <div className="flex gap-x-5 items-center mb-10">
            <h1 className="text-4xl font-bold text-white">Contact</h1>
            <hr className="w-[200px] border-white border" />
          </div>

          <div className="grid lg:grid-cols-3 max-lg:grid-cols-1">
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-xl text-white">Personal Info</h1>
              <div className="grid  grid-cols-1 mb-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                    <FaMobileAlt className="text-red-500 text-2xl" />
                  </div>

                  <div className="flex flex-col ">
                    <h1 className="font-semibold text-sm text-white">
                      Phone
                    </h1>
                    <h1 className="font-semibold text-[16px] text-white">
                      +91 9955050869
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-10">
                  <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                    <IoLocation className="text-red-500 text-2xl" />
                  </div>

                  <div className="flex flex-col ">
                    <h1 className="font-semibold text-sm text-white">
                      Location
                    </h1>
                    <h1 className="font-semibold text-[16px] text-white">Bihar</h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-10">
                  <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                    <MdOutlineMail className="text-red-500 text-2xl" />
                  </div>

                  <div className="flex flex-col ">
                    <h1 className="font-semibold text-sm text-white">
                      Email
                    </h1>
                    <h1 className="font-semibold text-[16px] text-white">
                      nitishkumar6203375@gmail.com
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-10">
                  <div className="w-[50px] h-[50px] rounded-md bg-white  justify-center flex items-center shadow-md">
                    <CgCalendarDates className="text-red-500 text-2xl" />
                  </div>

                  <div className="flex flex-col ">
                    <h1 className="font-semibold text-sm text-white">
                    Birthday
                    </h1>
                    <h1 className="font-semibold text-[16px] text-white">
                    Apr 09,2001
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="bg-white py-[50px]  w-full border rounded-xl max-md:px-5 md:px-10">
                <Form form={form} onFinish={onFinish} layout="vertical">
                  <Form.Item
                    name="name"
                    className="font-semibold text-lg"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                      {
                        type: "text",
                        message: "Please Enter Your Name",
                      },
                    ]}
                  >
                    <Input
                      className="py-2 h-[44px] "
                      placeholder="Enter Name"
                      style={{ borderRadius: "0" }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    className="font-semibold text-lg"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <Input
                      className="py-2 h-[44px] "
                      placeholder="Enter Email"
                      style={{ borderRadius: "0" }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                      {
                        type: "text",
                        message: "Please enter your message",
                      },
                    ]}
                  >
                    <Input.TextArea
                      className="border-2 outline-none focus:outline-none rounded-0 "
                      placeholder="Your Message"
                      style={{ height: "130px", borderRadius: "0" }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="font-seibold mt-3 bg-[#5800FF] h-[50px] text-white text-lg"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
