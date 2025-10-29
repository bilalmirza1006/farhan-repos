import React from "react";
import Image1 from "@/public/home-2/success-1.jpg";
import Image2 from "@/public/home-2/success-2.jpg";
import Image3 from "@/public/home-2/success-3.jpg";
import Button from "../../ui/Button";

const SuccessSection = () => {
  return (
    <section className="bg-[#F5F8FF] py-[100px] px-5">
      <section className="flex flex-col max-w-[1000px] mx-auto gap-20 items-center ">
        <div className="max-w-[500px] text-center mx-auto flex flex-col gap-3">
          <h3 className="text-3xl font-bold text-Primarytext">
            From Start to Success — <br />
            All in One Place
          </h3>
          <p className="text-Lighttext text-base">Step-by-step guidance, all-in-one support — study abroad made easy. </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 success-card-wrapper gap-1">
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-5 left-5 z-3 text-[var(--bg-primary-color)]">How it works</h4>
            <div className="img-wrap">
              <img src={Image1.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
            </div>
          </article>
          <article className="relative">
            <h4 className="w-full text-center text-2xl font-semibold absolute -top-5  z-3 text-primary-text">What’s Included</h4>
            <div className="img-wrap">
              <img src={Image2.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
            </div>
          </article>
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-5 right-5 z-3 text-[var(--bg-primary-color)]">Why Us?</h4>
            <div className="img-wrap">
              <img src={Image3.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
            </div>
          </article>
        </section>
        <Button text="Get Started" bg="bg-white" color="text-black" />
      </section>
    </section>
  );
};

export default SuccessSection;
