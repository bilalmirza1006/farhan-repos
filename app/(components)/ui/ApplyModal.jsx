'use client'

import React from 'react'
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Button from './Button';

const ApplyModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone } = formData;
        if (!firstName || !lastName || !email || !phone) {
            alert("Please fill in all fields before continuing.");
            return;
        }
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-[#0000004D] flex items-center justify-center z-50">
            <div className="bg-white px-6 py-8 rounded-3xl shadow-lg w-full max-w-[720px] m-5 md:m-0">
                <div className="flex justify-center">
                    <img src="/logo.png" alt="Get2Uni" className="h-10 w-auto" />
                </div>

                <div className="text-center mt-5">
                    <p className="font-roboto font-semibold text-2xl md:text-4xl text-primaryheading ">
                        Complete Your Enrollment
                    </p>
                    <p className="font-roboto font-normal text-xl text-Lighttext ">
                        Please enter your basic details to proceed. You’ll be redirected to your dashboard to track your application.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4 mt-5">
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                className="border rounded p-2 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                className="border rounded p-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="border rounded p-2 w-full"
                            />
                        </div>

                        {/* ✅ Updated phone input */}
                        <div>
                            <label className="block text-gray-800 font-medium mb-1">
                                Phone number
                            </label>
                            <PhoneInput
                                country={"us"} // Default country
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                inputStyle={{
                                    width: "100%",
                                    height: "40px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                }}
                                containerStyle={{ width: "100%" }}
                                buttonStyle={{
                                    border: "none",
                                    background: "transparent",
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <Button type={'submit'} text={'Continue to Dashboard'} cn={'md:!px-18'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplyModal