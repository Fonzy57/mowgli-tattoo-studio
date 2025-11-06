// REACT & NEXT
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
      className={`flex min-h-[80px] w-full items-center justify-center transition duration-300 ease-in-out ${
        isHomePage ? homeStyle : globalStyle
      }`}
    >
      <div
        className={`mx-auto flex w-[1325px] items-center justify-between transition duration-300 ease-in-out xl:w-[1560px]`}
      >
        <Link href={"/"} scroll={false}>
          <Image
            src={"/images/mowgli-tattoo-studio-logo.png"}
            width={70}
            height={70}
            alt="Logo de Mowgli Tattoo Studio "
            className={`${
              isHomePage ? homeLogoStyle : globalLogoStyle
            } transition duration-300 ease-in-out hover:grayscale-0`}
          />
        </Link>
        <nav>
          <ul className="flex gap-8 font-cera uppercase">
            {navLinks.map((navitem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={navitem.url}
                    scroll={false}
                    className={`text-xl font-bold transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active ${
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
