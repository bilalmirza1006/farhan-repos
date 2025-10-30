const LandingButton = ({ text, icon, color, bg, cn, ...rest }) => {
  return (
    <button
      {...rest}
      className={`group relative overflow-hidden py-3 px-6 rounded-2xl
        flex justify-center items-center gap-2 cursor-pointer
        font-medium text-sm md:text-base
        bg-white text-black backdrop-blur-md
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

export default LandingButton;
// export default LandingLandingButton
