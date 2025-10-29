import React from "react";
import Button from "../../ui/Button";

const Features = () => {
  const featuresData = [
    {
      title: "Start Studying Abroad",
      description:
        "Unlock expert support, smooth applications, and career-focused guidance — all in one place with Get2Uni.",
      features: [
        "Visa and migration assistance",
        "Career guidance",
        "Application assistance",
        "Document preparation",
        "University selection",
        "Post-arrival support",
      ],
    },
  ];

  return (
    <section className="py-[100px] px-4 max-w-[1440px] mx-auto flex flex-col gap-10">
      <div className="max-w-[500px] text-center mx-auto flex flex-col gap-3">
        <h5 className="text-primarycolor text-sm font-semibold tracking-wide">
          Features
        </h5>
        <h3 className="text-3xl font-bold text-Primarytext">What You Gain</h3>
        <p className="text-Lighttext text-base">
          Unlock expert support, smooth applications, and career-focused
          guidance — all in one place with Get2Uni.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((ft, i) => (
          <article
            key={i}
            className="flex flex-col gap-4 items-start p-6 rounded-lg shadow-md bg-white"
          >
            <h4 className="text-2xl font-bold text-Primarytext">{ft.title}</h4>
            <ul className="flex flex-col gap-2 mt-2">
              {ft.features.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9947 5.15842C16.6758 5.51482 16.3756 5.87122 16.0943 6.22762C15.963 6.37768 15.8504 6.52775 15.7191 6.69657C15.9442 7.39061 16.0755 8.14093 16.0755 8.91C16.0568 12.8492 12.8492 16.0568 8.91 16.0568C4.97084 16.0568 1.76324 12.8492 1.76324 8.91C1.76324 4.97084 4.97084 1.76324 8.91 1.76324C10.1668 1.76324 11.3673 2.10088 12.399 2.66362C12.7554 2.30722 13.1118 1.96958 13.4869 1.63194L13.7308 1.4256C12.3427 0.525221 10.692 0 8.91 0C3.99543 0 0 3.99543 0 8.91C0 13.8246 3.99543 17.82 8.91 17.82C13.8246 17.82 17.82 13.8246 17.82 8.91C17.82 7.57819 17.5199 6.30265 16.9947 5.15842Z"
                      fill="#C7044C"
                    />
                    <path
                      d="M11.4233 6.26465C10.748 7.09 10.1102 7.93411 9.50999 8.79697C9.20986 9.2284 8.90974 9.67859 8.62837 10.1288L6.22736 7.16503C5.94599 6.82739 5.45829 6.75236 5.08313 6.99621C4.68921 7.25882 4.59542 7.78404 4.85803 8.17796L7.87805 12.6611C7.95309 12.7736 8.06563 12.8862 8.19694 12.9612C8.36576 13.0738 8.55334 13.13 8.74092 13.13C9.09732 13.13 9.49123 12.9425 9.66005 12.6236C9.82887 12.3235 10.673 10.7665 11.2357 9.92244C11.7797 9.07834 12.3424 8.25299 12.9614 7.4464C13.5617 6.63981 14.1995 5.85198 14.8747 5.10166C15.5313 4.35135 16.2441 3.58227 16.9569 2.92575L16.9756 2.90699C17.3133 2.58811 17.332 2.06288 17.0319 1.72524C16.713 1.36884 16.1878 1.33133 15.8314 1.65021C15.0061 2.38177 14.2745 3.11333 13.5429 3.8824C12.7926 4.65147 12.0798 5.43931 11.4233 6.26465Z"
                      fill="#C7044C"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button text="Explore & Apply" />
          </article>
        ))}
      </section>
    </section>
  );
};

export default Features;
