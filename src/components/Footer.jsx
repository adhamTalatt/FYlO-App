import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  const content = [
    {
      icon: "icon-phone.svg",
      text: "+201023157894",
    },
    {
      icon: "icon-email.svg",
      text: "example@fylo.com",
    },
  ];
  const links = [
    "About us",
    "Contact us",
    "Jops",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ];
  const icons = ["Facebook", "twitter", "instagram"];
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className=" container text-white">
        <a>
          <img
            src="./images/logo.svg"
            alt="log-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="./images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              distinctio facere deleniti magni distinctio facere deleniti magni
              distinctio facere deleniti magni
            </p>
          </div>
          <div>
            {content.map((items, index) => {
              return (
                <div
                  key={index}
                  className=" flex items-center gap-[15px] mb-[15px] last-of-type:md-0"
                >
                  <img
                    src={`./images/${items.icon}`}
                    alt="icon"
                    className=" w-[18px] h-[18px] object-contain"
                  />
                  <p>{items.text}</p>
                </div>
              );
            })}
          </div>
          <ul className=" grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={`#${link}`}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {link}
                </a>
              );
            })}
          </ul>
          <ul className="flex gap-[15px] w-full md:w-auto justify-center">
            {icons.map((icon, index) => {
              return (
                <a href={""} key={index} className=" group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%] ">
                    {icon === "Facebook" ? (
                      <FaFacebookF className="group-hover:text-primary transition-all duration-200" />
                    ) : icon === "twitter" ? (
                      <FaTwitter className="group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
