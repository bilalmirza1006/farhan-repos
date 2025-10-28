import React from "react";
import Image from "next/image";
import Phone from "@/public/contact/phone.png";
import BusinessHours from "@/public/contact/business-hours.png";
import Address from "@/public/contact/address.png";
import User from "../../icons/User";
import Message from "../../icons/Message";

const ContactUsForm = () => {
  const information = [
    {
      icon: Phone,
      title: "PHONE",
      description: "123-456-789",
    },
    {
      icon: BusinessHours,
      title: "BUSINESS HOURS",
      description: "Monday – Saturday: 8:00 AM – 5:00 PM Sunday: Closed",
    },
    {
      icon: Address,
      title: "ADDRESS",
      description: "Punjab, Lahore, Pakistan",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 mt-3">
          <span className="text-[#190459]">CONTACT</span>{" "}
          <span className="text-[#C7044C]">US FORM</span>
        </h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto">
          Have questions about studying abroad, finding the right university, or
          using our platform? Our team is here to help you every step of the
          way.
        </p>
      </div>
      <div className="max-w-6xl mx-auto bg-white border shadow-xs rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h1 className="text-xl tracking-wide md:text-2xl font-bold text-gray-800 mb-12">
              CONTACT INFORMATION
            </h1>

            <div className="flex flex-col gap-8">
              {information.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src={info.icon}
                    width={50}
                    height={50}
                    alt={info.title}
                  />

                  <div>
                    <h3 className="text-[#C7044C] font-semibold uppercase text-sm">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="order-1 lg:order-2">
            <h1 className="text-xl tracking-wide md:text-2xl font-bold text-gray-800 mb-12">
              CONTACT FORM
            </h1>

            <form className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex items-center border space-x-2 border-gray-300 rounded-md px-3 py-2">
                <User className="text-[#C7044C] w-5 h-5 " />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Last name */}
              <div className="flex items-center border space-x-2 border-gray-300 rounded-md px-3 py-2">
                <User className="text-[#C7044C] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Email */}
              <div className="flex border border-gray-300 rounded-md px-3 py-2 space-x-2">
                <div className="pt-1.5">
                  <Message className="text-[#C7044C] w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="Email@gmail.com"
                  className="w-full outline-none text-gray-700 resize-none"
                />
              </div>

              {/* Message */}
              <div className="flex border border-gray-300 rounded-md px-3 py-2 space-x-2">
                <div className="pt-1.5">
                  <Message className="text-[#C7044C] w-5 h-5" />
                </div>
                <textarea
                  placeholder="Message"
                  className="w-full outline-none text-gray-700 resize-none"
                  rows="3"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#C7044C] text-white py-3 rounded-md font-semibold hover:bg-[#a1033f] transition mt-2 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
