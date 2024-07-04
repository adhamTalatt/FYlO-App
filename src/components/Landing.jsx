import landingImage from "../assets/images/landing-img.png";
export default function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container  ">
        <div className="element-center pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src={landingImage}
              alt="landing-img"
              className=" w-full h-fit"
            />
          </div>
          <div className=" text-white text-center">
            <h1 className="text-[22px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location
              <br />
              accessible anywhere.
            </h1>
            <p className=" font-normal text-[14px] md:text-[20px] px-[15px] w-[100%] md:w-[600px] mx-auto mb-[30px] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis cupiditate, provident, quas eveniet laboriosam.
              Quibusdam pr
            </p>
          </div>
          <a
            href=""
            className="btn w-[180px] md:w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
