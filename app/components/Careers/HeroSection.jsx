"use client";

export default function HeroSection() {
  return (
    <div className="relative text-white w-full hero bg-[#092346] h-[50vh] flex items-center justify-between">
      {/* Placeholder for hidden content */}
      <div className="hidden"></div>

      {/* Hero Text */}
      <div className="absolute top-16 left-0 transform mt-10 w-full px-6 text-right lg:w-1/2">
        <h1 className="lg:text-4xl text-xl mb-6">Join Us Now</h1>
        <p>
          We believe that our team is the foundation of our success, and we
          strive to provide a motivating work environment while continuously
          investing in developing their skills to keep up with our latest
          services.
        </p>

        {/* CTA Button */}
        <div className="bg-white hover:bg-transparent transition hover:text-primary hover:border-2 hover:border-primary text-[#092346] rounded-md px-12 py-2 w-fit cursor-pointer font-bold mt-4 border border-transparent text-[#092346] flex items-center justify-end ms-auto hover:bg-transparent hover:text-white hover:border-white">
          <p>Available jobs</p>
        </div>
      </div>

      {/* Decorative Shapes */}
      <img
        className="absolute z-20 top-75 -bottom-40 right-20 lg:block"
        src="/images/career-hero.svg"
        alt="first image"
        width={623}
        height={153}
      />

      <img
        className="absolute top-12 right-20 w-1/4 lg:block"
        src="/images/HERO-SHAPE-BLZqqfdr.svg"
        alt="Hero Shape"
        width={300}
        height={300}
      />
    </div>
  );
}
