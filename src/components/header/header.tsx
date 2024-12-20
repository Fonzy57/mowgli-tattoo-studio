// REACT & NEXT
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// COMPONENTS
import BaseImage from "../image/base-image";

// CONFIG
import { navLinks } from "@/config/nav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname == "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    // Checks the initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* STYLE FOR HOME NAV */
  const homeStyle = `${
    scrolled ? "bg-main border-b border-secondary" : "bg-transparent"
  }`;
  const homeLinksStyle = `${
    scrolled
      ? "text-text"
      : "text-main-altLight [text-shadow:_1px_1px_2px_rgb(255_209_97_/_0.2)] hover:[text-shadow:none]"
  }`;
  const homeLogoStyle = `${scrolled ? "grayscale-0" : "grayscale"}`;

  /* STYLE FOR GLOBAL NAV */
  const globalStyle = "bg-main border-b border-secondary";
  const globallinksStyle = "text-text";
  const globalLogoStyle = `grayscale-0`;

  return (
    <div
      className={`w-full min-h-[80px] flex justify-center items-center transition duration-300 ease-in-out ${
        isHomePage ? homeStyle : globalStyle
      }`}
    >
      <div
        className={`flex items-center justify-between w-[1325px] mx-auto xl:w-[1560px] transition duration-300 ease-in-out`}
      >
        <Link href={"/"} scroll={false}>
          <BaseImage
            src={"/images/mowgli-tattoo-studio-logo.png"}
            width={70}
            height={70}
            alt="Logo de Mowgli Tattoo Studio "
            className={`${
              isHomePage ? homeLogoStyle : globalLogoStyle
            } hover:grayscale-0 transition duration-300 ease-in-out`}
          />
        </Link>
        <nav>
          <ul className="flex gap-8 font-cera uppercase ">
            {navLinks.map((navitem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={navitem.url}
                    scroll={false}
                    className={`font-bold text-xl hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out ${
                      isHomePage ? homeLinksStyle : globallinksStyle
                    }`}
                  >
                    {navitem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
