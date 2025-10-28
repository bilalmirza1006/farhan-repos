"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Button from "./Button";
import { LogIn } from "lucide-react";

const EnrollmentModal = ({ isOpen, onClose, onSubmit }) => {
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

        const { phone } = formData;
        if (!phone) {
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
                        Mobile Verification
                    </p>
                    <p className="font-roboto font-normal text-xl text-Secondarytext ">
                        We’ll send a one time password
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 mt-5">

                        <div>
                            <label className="block text-primary text-sm font-medium mb-1">
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
                    <div className="mt-5 flex justify-end items-center gap-5">
                        {/* <Button type="submit" text="Cancel" color="text-white" bg={'bg-light'} cn={''} /> */}
                        <Button type="submit" text="Send OTP" color="text-white" cn={''} />
                    </div>
                    {/* <button
                        type="submit"
                        className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
                    >
                        Continue to Dashboard
                    </button> */}
                </form>
            </div>
        </div>
    );
};

export default EnrollmentModal;
