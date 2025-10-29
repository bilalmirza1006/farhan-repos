"use client";
import React from "react";
import Logo from "@/public/main-logo.png";
import GooglePlayIcon from "@/public/home-2/play-store.png";
import AppStoreIcon from "@/public/home-2/apple-store.png";

import Link from "next/link";
import { FacebookIcon } from "@/public/icons/FacebookIcon";
import InstagramIcon from "@/public/icons/InstagramIcon";
import YoutubeIcon from "@/public/icons/YoutubeIcon";

const Home2Footer = () => {
  return (
    <footer className="bg-[#F5F8FF66]">
      <section className="max-w-[1440px] mx-auto py-12 md:py-16 lg:py-[100px] px-5 md:px-8 lg:px-12 border-t border-[#353F5552] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-20">
        {/* Logo and App Downloads Section */}
        <section className="flex flex-col gap-4">
          <Link href="/home-2" className="flex items-center">
            <img src="/main-logo.png" alt="Get2Uni Logo" className="w-full max-w-[160px] md:max-w-[200px]" />
          </Link>
          <p className="text-sm md:text-base text-Primarytext">Download the app by clicking the link below:</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="#" className="transition-transform hover:scale-105 duration-200">
              <img src={GooglePlayIcon.src} alt="Get it on Google Play" className="w-full max-w-[140px] md:max-w-[120px] h-auto" />
            </Link>
            <Link href="#" className="transition-transform hover:scale-105 duration-200">
              <img src={AppStoreIcon.src} alt="Download on App Store" className="w-full max-w-[140px] md:max-w-[120px] h-auto" />
            </Link>
          </div>
        </section>

        {/* Pages Section */}
        <section className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-Primarytext font-bold text-base md:text-lg">Pages</h3>
          <ul className="flex flex-col gap-2 md:gap-3 text-Primarytext text-sm md:text-base">
            <li>
              <Link href="/home-2" className="hover:text-[#C7044C] transition-colors duration-200">
                How it work
              </Link>
            </li>
            <li>
              <Link href="/home-2#features" className="hover:text-[#C7044C] transition-colors duration-200">
                Features
              </Link>
            </li>
            <li>
              <Link href="/home-2#faqs" className="hover:text-[#C7044C] transition-colors duration-200">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/home-2#success-stories" className="hover:text-[#C7044C] transition-colors duration-200">
                Success Stories
              </Link>
            </li>
          </ul>
        </section>

        {/* Service Section */}
        <section className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-Primarytext font-bold text-base md:text-lg">Service</h3>
          <ul className="flex flex-col gap-2 md:gap-3 text-Primarytext text-sm md:text-base">
            <li>
              <Link href="/home-2#university-search" className="hover:text-[#C7044C] transition-colors duration-200">
                University Search
              </Link>
            </li>
            <li>
              <Link href="/home-2#visa-assistance" className="hover:text-[#C7044C] transition-colors duration-200">
                Visa Assistance
              </Link>
            </li>
            <li>
              <Link href="/home-2#support" className="hover:text-[#C7044C] transition-colors duration-200">
                Live Chat Support
              </Link>
            </li>
          </ul>
        </section>

        {/* Social Media Section */}
        <section className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-Primarytext font-bold text-base md:text-lg">Social media</h3>
          <div className="flex gap-3 md:gap-4">
            <Link href="#" className="transition-transform hover:scale-110 duration-200" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link href="#" className="transition-transform hover:scale-110 duration-200" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <Link href="#" className="transition-transform hover:scale-110 duration-200" aria-label="Youtube">
              <YoutubeIcon />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Home2Footer;
