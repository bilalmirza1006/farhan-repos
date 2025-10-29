import React from "react";
import Image1 from "@/public/home-2/success-1.jpg";
import Image2 from "@/public/home-2/success-3.jpg";
const UniDreams = () => {
  return (
    <section className="py-[100px] px-5 max-w-[1440px] mx-auto flex flex-col gap-10">
      <div className="max-w-[600px] text-center mx-auto flex flex-col gap-3">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)]">1,000+ University Dreams Realized – Yours Is Next</h3>
        <p className="text-Lighttext text-base">Join thousands of students we’ve guided to their dream universities and start your journey today.</p>
      </div>
      <section className="flex uni-dream-card-wrapper justify-center gap-5">
        <article className="relative max-w-[400px]">
          <div className="img-wrap">
            <img src={Image1.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
          </div>
        </article>
        <article className="relative max-w-[400px]">
          <div className="img-wrap">
            <img src={Image2.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
          </div>
        </article>
      </section>
    </section>
  );
};

export default UniDreams;
