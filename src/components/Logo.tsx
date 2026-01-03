const Logo = () => {
  return (
    <h2
      className="
        text-xl md:text-2xl font-bold tracking-wide
        text-white relative cursor-pointer
        transition-all duration-300
        hover:text-teal-400
        after:content-['']
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-teal-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      Mr. <span className="text-teal-400">Nitya</span> Mahata
    </h2>
  );
};

export default Logo;
