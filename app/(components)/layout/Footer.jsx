import { Facebook, Instagram, Twitter } from "lucide-react";

// app/(components)/layout/Footer.tsx
export const Footer = () => {
    return (
        <footer className="bg-[#C7044C0D] w-full h-[352px] md:h-[190px] ">
            <div className=" flex flex-col md:flex-row items-center justify-around border  h-full ">
                <div className="flex flex-col md:flex-row items-center justify-around w-full ">
                    {/* Logo */}
                    <div className="flex justify-center items-center ">
                        <img src="/logo.png" alt="Get2Uni" className="h-10 w-auto" />
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col md:flex md:flex-row flex-wrap justify-center items-center md:gap-10 ">
                        <li>
                            <a href="#" className="font-roboto font-normal text-base text-Primarytext leading-5 hover:underline">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-roboto font-normal text-base text-Primarytext leading-5 hover:underline">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-roboto font-normal text-base text-Primarytext leading-5 hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-roboto font-normal text-base text-Primarytext leading-5 hover:underline">
                                FAQ
                            </a>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex gap-5 text-[#190459] md:text-2xl mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#C8102E] transition-colors">
                            <Facebook size={22} strokeWidth={2} />
                        </a>
                        <a href="#" className="hover:text-[#C8102E] transition-colors">
                            <Instagram size={22} strokeWidth={2} />
                        </a>
                        <a href="#" className="hover:text-[#C8102E] transition-colors">
                            <Twitter size={22} strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
