const NavItemLayout = (props) => {
  return (
    /*before:content-[' '] before:absolute before:right-0 before:top-[-30px] before:w-[50px] before:h-[50px] before:rounded-full before:shadow-custom*/
    <li
      className="p-2 flex items-center gap-4 text-white  hover:bg-gray-400 hover:text-black hover:rounded-l-full mb-2 transition-all cursor-pointer"
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};

export default NavItemLayout;
