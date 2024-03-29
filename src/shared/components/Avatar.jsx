const Avatar = (props) => {
  return (
    <div className="w-6 h-6 rounded-full bg-myblue text-white text-center leading-5">
      {props.username.slice(0, 2)}
    </div>
  );
};

export default Avatar;
