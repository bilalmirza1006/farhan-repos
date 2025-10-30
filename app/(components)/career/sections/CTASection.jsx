// import React from 'react';

// export default function CTASection() {
//   return (
//     <section
//       className="bg-cover bg-center py-20 text-center"
//       style={{
//         backgroundImage: "url('/career/background.jpg')",
//       }}
//     >
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Ready to Secure <br className="hidden md:block" /> Your IT Future?
//         </h2>

//         <p className="text-secondarytext mb-8">
//           Join <span className="text-primarycolor font-semibold">Get2Uni</span> now to start your
//           personalized learning journey and secure a high-demand internship before you graduate.
//         </p>

//         <button className="px-6 py-2 mt-12 bg-primarycolor hover:bg-pink-700 text-white font-medium rounded-full transition">
//           Register Now
//         </button>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Button from '../../ui/Button';
import LandingHeader from '../../ui/LandingHeader';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="relative py-20 flex items-center justify-center text-center overflow-hidden">
      {/* ✅ Background image with only 53% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/career/background.jpg')",
          opacity: 0.53, // only affects background, not content
        }}
      ></div>

      {/* ✅ Content on top */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Secure <br className="hidden md:block" /> Your IT Future?
        </h2>

        <p className="text-secondarytext mb-8">
          Join <span className="text-primarycolor font-semibold">Get2Uni</span> now to start your
          personalized learning journey and secure a high-demand internship before you graduate.
        </p>

        <div className="flex items-center justify-center">
          <Link href="https://portal.get2uni.com/signup">  <LandingHeader text={'Register Now'} /></Link>
        </div>
      </div>
    </div>
  );
}
