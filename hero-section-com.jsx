function Hero() {
  return (
    <>
      <section className="bg-black text-white lg:flex relative">
        <div className="w-full h-[50vh] lg:h-[100v] flex flex-col justify-center items-center my-auto relative">
          <h1 className="text-4xl sm:text-5xl lg::text-6xl font-semibold tracking-tight text-center">
            Automating
            <br />
            Social Commerce
            <br />
            in the MENA.
          </h1>
          <p className="mt-5 text-center">
            We connect businesses to their customers with <br /> smart Booking &
            Ordering solutions
          </p>
          <a
            href="#"
            className="bg-gradient-to-b from-[#B1FF36] to-[#1D863C] rounded py-2 px-6 lg:py-3 lg:px-8 font-medium mt-10"
          >
            Register interest
          </a>
        </div>
        <div className="w-full h-[60vh] lg:h-[100vh]">
          <div className="w-full h-full relative">
            <img
              className="h-full mx-auto"
              src="../src/assets/landing-page-phone.webp"
              alt=""
            />
            <div className="absolute top-[10%] left-[10%] flex items-center justify-center">
              <img
                src="../src/assets/Box2.webp"
                alt="Popup Image 1"
                className="w-[200px] h-auto z-10"
              />
            </div>
            <div className="absolute bottom-[15%] right-[0%] flex items-center justify-center">
              <img
                src="../src/assets/Box2.webp"
                alt="Popup Image 2"
                className="w-[200px] h-auto z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
