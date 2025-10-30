// // const Button = ({ text, icon, color, bg, cn, ...rest }) => {
// //     return (
// //         <button
// //             {...rest}
// //             className={`py-3 px-6  rounded-md flex justify-center items-center cursor-pointer gap-2 transition-all duration-100 hover:bg-[#A4003D] ${color ? color : 'text-white'
// //                 } text-sm md:text-base font-medium ${bg ? bg : 'bg-primarycolor'} ${cn}`}
// //         >
// //             {icon && <span className="text-lg">{icon}</span>}
// //             {text}
// //         </button>
// //     );
// // };

// // export default Button;

// const Button = ({ text, icon, color, bg, cn, ...rest }) => {
//   return (
//     <button
//       {...rest}
//       className={`group relative overflow-hidden py-3 px-6 rounded-[1.25rem]
//         flex justify-center items-center gap-2 cursor-pointer
//         font-medium text-sm md:text-base
//         bg-[rgba(154,154,154,0.4)] text-white backdrop-blur-md
//         transition-all duration-300 ease-out hover:scale-[1.05] ${cn}`}
//     >
//       {/* Text + icon */}
//       <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
//         {icon && <span className="text-lg">{icon}</span>}
//         {text}
//       </span>

//       {/* Animated background fill layer */}
//       <span
//         className="absolute bottom-0 left-0 w-full h-0 bg-[#C7044C]
//         transition-all duration-500 ease-in-out group-hover:h-full"
//       />
//     </button>
//   );
// };

// export default Button;

// const Button = ({ text, icon, color, bg, cn, ...rest }) => {
//   return (
//     <button
//       {...rest}
//       className={`group relative overflow-hidden py-3 px-6 rounded-[1.25rem]
//         flex justify-center items-center gap-2 cursor-pointer
//         font-medium text-sm md:text-base
//         bg-[rgba(154,154,154,0.4)] text-white backdrop-blur-md
//         transition-all duration-300 ease-out hover:scale-[1.05] ${cn}`}
//     >
//       {/* Text + Icon */}
//       <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
//         {icon && <span className="text-lg">{icon}</span>}
//         {text}
//       </span>

//       {/* Curved wave fill rising upward */}
//       {/* <span
//         className="absolute left-1/2 bottom-[-263%] w-[200%] h-[200%]
//         bg-[#C7044C] rounded-[50%] -translate-x-1/2
//         transition-all duration-700 ease-in-out
//         group-hover:bottom-[-20%]"
//       /> */}
//       <span
//         className="absolute left-1/2 bottom-[-263%] w-[200%] h-[200%]
//   bg-[#C7044C] rounded-[50%] -translate-x-1/2
//   transition-all duration-[500ms] [transition-timing-function:cubic-bezier(0.55,0.05,0.67,0.19)]
//   group-hover:bottom-[-20%]"
//       />
//     </button>
//   );
// };

// export default Button;

const Button = ({ text, icon, color, bg, cn, ...rest }) => {
  return (
    <button
      {...rest}
      className={`group relative overflow-hidden py-3 px-6 rounded-md
        flex justify-center items-center gap-2 cursor-pointer
        font-medium text-sm md:text-base
        bg-[rgba(154,154,154,0.4)] text-white backdrop-blur-md
        transition-transform duration-300 ease-out hover:scale-[0.97] ${cn}`}
    >
      {/* Text + Icon */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
        {icon && <span className="text-lg">{icon}</span>}
        {text}
      </span>

      {/* Curved wave fill rising upward */}
      <span
        className="absolute left-1/2 bottom-[-263%] w-[200%] h-[200%]
        bg-[#C7044C] rounded-[100%] -translate-x-1/2
        transition-all duration-[500ms] [transition-timing-function:cubic-bezier(0.55,0.05,0.67,0.19)]
        group-hover:bottom-[-20%]"
      />
    </button>
  );
};

export default Button;
