"use-client";
import React from "react";
import Logo from "@/public/main-logo.png";
import GooglePlayIcon from "@/public/home-2/play-store.png";
import AppStoreIcon from "@/public/home-2/apple-store.png";
import FBLogo from "@/public/icons/FacebookIcon";
import IGLogo from "@/public/icons/InstagramIcon";
import YTLogo from "@/public/icons/YoutubeIcon";
import Link from "next/link";

const Home2Footer = () => {
  return (
    <footer className="bg-[#F5F8FF66] ">
      <section className="max-w-[1440px] mx-auto py-[100px] px-5 border-t border-[#353F5552] grid grid-cols-4 gap-5">
        <section className="flex flex-col gap-4">
          <img src={Logo.src} alt="" className="w-full max-w-[200px]" />
          <p>Download the app by clicking the link below :</p>
          <div className="flex justify-between gap-4">
            <Link href="#">
              <img src={GooglePlayIcon.src} alt="" className="w-full max-w-[120px] h-full" />
            </Link>
            <Link href="#">
              <img src={AppStoreIcon.src} alt="" className="w-full max-w-[120px] h-full" />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Home2Footer;
