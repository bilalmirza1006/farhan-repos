"use client";

export default function ScrollingMarquee() {
    const items = [
        "APPLY WITH EASE",
        "SCHOLARSHIPS & FUNDING",
        "QUICKLY FIND UNIVERSITY",
        "VISA & SOP GUIDANCE",
        "TRUSTED BY THOUSANDS",
        "ALL COUNTRIES, ALL DEGREES",
    ];

    return (
        <div className="bg-primarycolor text-white text-sm md:text-lg font-inter font-medium py-4 overflow-hidden">
            <marquee
                behavior="scroll"
                direction="left"
                scrollamount="5" // controls speed (1–10 recommended)
                className="whitespace-nowrap"
            >
                {items.map((item, i) => (
                    <span key={i} className="mx-6 inline-flex items-center">
                        {item}
                        <span className="mx-3 text-white">✦</span>
                    </span>
                ))}
            </marquee>
        </div>
    );
}
