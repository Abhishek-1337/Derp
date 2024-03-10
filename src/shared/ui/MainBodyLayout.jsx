const MainBodyLayout = (props) => {
  return (
    <div className="md:w-[calc(100%-250px)] md:relative z-[0] md:left-[250px] p-4 pt-2 md:pt-20 min-h-max">
      {props.children}
    </div>
  );
};

export default MainBodyLayout;
