const MainBodyTopBar = ({ heading, section, homeNavigationHandler }) => {
  return (
    <div>
      <h2 className="text-lg font-medium tracking-wide">{heading}</h2>
      <p className="text-xs tracking-tight font-normal">
        <span className="text-blue-700">
          <button onClick={homeNavigationHandler}>Dashboard</button>
        </span>{" "}
        {section}
      </p>
    </div>
  );
};

export default MainBodyTopBar;
