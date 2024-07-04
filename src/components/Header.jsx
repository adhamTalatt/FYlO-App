import { useEffect, useRef } from "react";

export default function Header() {
  const links = ["Features", "Team", "Sign in"];
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log();
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200 "
    >
      <div className=" container  flex justify-between items-center  gap-[30px]  md:gap-0 flex-col  sm:flex-row ">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </a>
        <nav className="">
          <ul className="flex items-center gap-[50px]">
            {links.map((links, x) => {
              return (
                <li key={x}>
                  <a
                    className={
                      "text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-20 "
                    }
                    href={`/${links.toLowerCase}`}
                  >
                    {links}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
