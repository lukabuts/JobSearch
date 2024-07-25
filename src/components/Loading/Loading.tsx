const Loading = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center">
      <div className="h-[50px] w-[50px] border-4 border-t-tealBlue rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
