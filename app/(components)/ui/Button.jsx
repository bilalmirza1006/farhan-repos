const Button = ({ text, icon, color, bg, cn, ...rest }) => {
    return (
        <button
            {...rest}
            className={`py-3 px-6  rounded-md flex justify-center items-center gap-2 transition-all duration-100 hover:bg-[#A4003D] ${color ? color : 'text-white'
                } text-sm md:text-base font-medium ${bg ? bg : 'bg-primarycolor'} ${cn}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {text}
        </button>
    );
};

export default Button;
