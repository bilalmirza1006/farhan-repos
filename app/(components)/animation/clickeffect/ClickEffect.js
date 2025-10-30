// // // 'use client';
// // // import { useEffect } from 'react';
// // // import { createPortal } from 'react-dom';

// // // export default function ClickEffect() {
// // //   useEffect(() => {
// // //     const handleClick = (e) => {
// // //       const icon = document.createElement('div');
// // //       icon.innerHTML = '💫'; // 👉 You can change to ❤️, ⭐, 👍, etc.
// // //       icon.style.position = 'fixed';
// // //       icon.style.left = `${e.clientX}px`;
// // //       icon.style.top = `${e.clientY}px`;
// // //       icon.style.fontSize = '24px';
// // //       icon.style.pointerEvents = 'none';
// // //       icon.style.animation = 'flyUp 1s ease-out forwards';
// // //       document.body.appendChild(icon);

// // //       // remove after animation
// // //       setTimeout(() => {
// // //         icon.remove();
// // //       }, 1000);
// // //     };

// // //     window.addEventListener('click', handleClick);
// // //     return () => window.removeEventListener('click', handleClick);
// // //   }, []);

// // //   return createPortal(
// // //     <style jsx global>{`
// // //       @keyframes flyUp {
// // //         0% {
// // //           opacity: 1;
// // //           transform: translateY(0) scale(1);
// // //         }
// // //         100% {
// // //           opacity: 0;
// // //           transform: translateY(-80px) scale(1.5);
// // //         }
// // //       }
// // //     `}</style>,
// // //     document.body
// // //   );
// // // }

// // 'use client';
// // import { useEffect } from 'react';
// // import { GraduationCap } from 'lucide-react';
// // import { createRoot } from 'react-dom/client';

// // export default function ClickEffect() {
// //   useEffect(() => {
// //     const handleClick = (e) => {
// //       const iconContainer = document.createElement('div');
// //       iconContainer.style.position = 'fixed';
// //       iconContainer.style.left = `${e.clientX - 12}px`; // adjust center
// //       iconContainer.style.top = `${e.clientY - 12}px`;
// //       iconContainer.style.pointerEvents = 'none';
// //       iconContainer.style.zIndex = 9999;
// //       iconContainer.style.animation = 'flyUp 1.2s ease-out forwards';
// //       document.body.appendChild(iconContainer);

// //       const root = createRoot(iconContainer);
// //       root.render(
// //         <GraduationCap
// //           size={28}
// //           color="#4F46E5" // 🎨 change color here (e.g. #4F46E5 = indigo)
// //           className="animate-pop"
// //         />
// //       );

// //       setTimeout(() => {
// //         root.unmount();
// //         iconContainer.remove();
// //       }, 1200);
// //     };

// //     window.addEventListener('click', handleClick);
// //     return () => window.removeEventListener('click', handleClick);
// //   }, []);

// //   return (
// //     <style jsx global>{`
// //       @keyframes flyUp {
// //         0% {
// //           opacity: 1;
// //           transform: translateY(0) scale(1);
// //         }
// //         50% {
// //           opacity: 0.8;
// //           transform: translateY(-40px) scale(1.3);
// //         }
// //         100% {
// //           opacity: 0;
// //           transform: translateY(-100px) scale(0.8);
// //         }
// //       }
// //     `}</style>
// //   );
// // }

// 'use client';
// import { useEffect } from 'react';
// import { GraduationCap } from 'lucide-react';
// import { createRoot } from 'react-dom/client';

// export default function ClickEffect() {
//   useEffect(() => {
//     const handleClick = (e) => {
//       const numIcons = 4; // 🎓 number of hats per click

//       for (let i = 0; i < numIcons; i++) {
//         const iconContainer = document.createElement('div');
//         iconContainer.style.position = 'fixed';
//         iconContainer.style.left = `${e.clientX}px`;
//         iconContainer.style.top = `${e.clientY}px`;
//         iconContainer.style.pointerEvents = 'none';
//         iconContainer.style.zIndex = 9999;

//         // Random offset & rotation
//         const angle = Math.random() * 360;
//         const distance = 30 + Math.random() * 50;
//         const offsetX = Math.cos((angle * Math.PI) / 180) * distance;
//         const offsetY = Math.sin((angle * Math.PI) / 180) * distance;

//         // Random color shades
//         const colors = ['#4F46E5', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6'];
//         const color = colors[Math.floor(Math.random() * colors.length)];

//         // Random size
//         const size = 20 + Math.random() * 15;

//         // Apply animation
//         iconContainer.style.animation = `fly${i}-${Date.now()} 1.2s ease-out forwards`;
//         document.body.appendChild(iconContainer);

//         // Create React root for Lucide icon
//         const root = createRoot(iconContainer);
//         root.render(<GraduationCap size={size} color={color} />);

//         // Create unique keyframes for random direction
//         const styleSheet = document.styleSheets[0];
//         const keyframes = `
//           @keyframes fly${i}-${Date.now()} {
//             0% {
//               opacity: 1;
//               transform: translate(0, 0) scale(1) rotate(0deg);
//             }
//             100% {
//               opacity: 0;
//               transform: translate(${offsetX}px, ${offsetY - 100}px) scale(1.4) rotate(${
//           Math.random() * 180
//         }deg);
//             }
//           }
//         `;
//         styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

//         // Remove after animation
//         setTimeout(() => {
//           root.unmount();
//           iconContainer.remove();
//         }, 1200);
//       }
//     };

//     window.addEventListener('click', handleClick);
//     return () => window.removeEventListener('click', handleClick);
//   }, []);

//   return null;
// }

'use client';
import { useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import { createRoot } from 'react-dom/client';

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e) => {
      const numIcons = Math.floor(Math.random() * 3) + 1; // 🎓 random: 1, 2, or 3

      for (let i = 0; i < numIcons; i++) {
        const iconContainer = document.createElement('div');
        iconContainer.style.position = 'fixed';
        iconContainer.style.left = `${e.clientX}px`;
        iconContainer.style.top = `${e.clientY}px`;
        iconContainer.style.pointerEvents = 'none';
        iconContainer.style.zIndex = 9999;

        // Random direction + distance
        const angle = Math.random() * 360;
        const distance = 25 + Math.random() * 40;
        const offsetX = Math.cos((angle * Math.PI) / 180) * distance;
        const offsetY = Math.sin((angle * Math.PI) / 180) * distance;

        // Single color 💖
        const color = '#c7044c';

        // Slightly random size
        const size = 22 + Math.random() * 8;

        // Random rotation
        const rotation = Math.random() * 180 - 90;

        // Unique animation name per icon
        const animName = `fly-${Date.now()}-${i}`;
        const styleSheet = document.styleSheets[0];
        const keyframes = `
          @keyframes ${animName} {
            0% {
              opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: translate(${offsetX}px, ${
          offsetY - 80
        }px) scale(1.4) rotate(${rotation}deg);
            }
          }
        `;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        iconContainer.style.animation = `${animName} 1.1s ease-out forwards`;
        document.body.appendChild(iconContainer);

        // Render the Lucide GraduationCap icon
        const root = createRoot(iconContainer);
        root.render(<GraduationCap size={size} color={color} />);

        // Cleanup after animation
        setTimeout(() => {
          root.unmount();
          iconContainer.remove();
        }, 1200);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
}
