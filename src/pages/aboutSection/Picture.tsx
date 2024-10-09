function Picture() {
  return (
    <div className="w-[384px] relative">
      <img
        className="pic w-[364px] h-full absolute flex-shrink-0 top-0 left-0"
        src="../../../public/Background.png"
        alt=""
      />
      <div className="pic w-[364px] h-full flex flex-shrink-0 rounded-2xl bg-glass-bg backdrop-blur-5 z-10 border border-solid border-glass"></div>
    </div>
  );
}

export default Picture;
