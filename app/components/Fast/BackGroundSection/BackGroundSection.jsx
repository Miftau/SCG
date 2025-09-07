

const BackGroundSection = () => {
  return (
    <div className="md:pt-68 pt-32 relative w-full h-[60vh] md:h-screen bg-white overflow-hidden flex items-center justify-center ">
      {/* المثلث الأزرق اليسار */}
      <div
        className="absolute top-0 left-0 w-1/4 h-[60vh] md:h-screen bg-[#0F2C4F] z-0"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      ></div>

      {/* المثلث الأزرق اليمين */}
      <div
        className="absolute top-0 right-0 w-1/4 h-[60vh] md:h-screen bg-[#0F2C4F] z-0"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      ></div>

      {/* الصورة في النص */}
      <div className="relative z-10 w-[90%] max-w-[900px] aspect-[900/907]">
        <img
          src="/images/Group19550.svg"
          alt="Center Illustration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BackGroundSection;
