import React from "react";

import Img1 from "@/public/home-2/mb-img-1.png";
import Img2 from "@/public/home-2/mb-img-2.png";
import Img3 from "@/public/home-2/mb-img-3.gif";
import Img4 from "@/public/home-2/mb-img-4.png";

const ExploreUni = () => {
  return (
    <section className="py-[100px] px-4 max-w-[1440px] mx-auto flex flex-col gap-10">
      <div className="max-w-[800px] text-center mx-auto flex flex-col gap-3">
        <h5 className="text-[var(--bg-primary-color)] text-sm font-semibold tracking-wide">Explore, Connect & Enroll</h5>
        <h3 className="text-5xl font-bold text-Primarytext">Explore Universities, Chat with Experts, Secure Your Admission</h3>
      </div>
      <section className="flex flex-col gap-6">
        <section className="flex justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h4 className="text-4xl font-bold text-Primarytext">Explore & Apply</h4>
            <p className="text-Lighttext text-base">
              Find the right university for you, connect with experts, and submit your application — all in one place.
            </p>
          </div>
          <img src={Img1.src} alt="" className="w-full max-w-[400px]" />
        </section>
        <section className="flex justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h4 className="text-4xl font-bold text-Primarytext">Explore & Apply #2</h4>
            <p className="text-Lighttext text-base">
              Find the right university for you, connect with experts, and submit your application — all in one place.
            </p>
          </div>
          <img src={Img2.src} alt="" className="w-full max-w-[400px]" />
        </section>
        <section className="flex justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h4 className="text-4xl font-bold text-Primarytext">Explore & Apply #3</h4>
            <p className="text-Lighttext text-base">
              Find the right university for you, connect with experts, and submit your application — all in one place.
            </p>
          </div>
          <img src={Img3.src} alt="" className="w-full max-w-[400px]" />
        </section>
      </section>
    </section>
  );
};

export default ExploreUni;
