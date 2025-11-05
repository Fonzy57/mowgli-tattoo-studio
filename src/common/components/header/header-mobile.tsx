// REACT & NEXT
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

// CONFIG
import { navLinks } from "@/config/nav";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Prevents page scrolling when menu is open
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.documentElement.style.position = "fixed";
      document.body.style.width = "100%";
      document.documentElement.style.width = "100%";
    };

    // Re-enables page scrolling when menu is closed
    const enableScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.documentElement.style.position = "";
      document.body.style.width = "";
      document.documentElement.style.width = "";
    };

    const closeMenu = () => {
      setOpen(false);
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Closes mobile menu when route has changed
    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      // Re-enables page scrolling when component is unmounted
      enableScroll();
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [open, router.events]);

  return (
    <>
      <div
        /* ${open ? "fixed inset-x-0 top-0 z-50" : ""} WAS BEFORE BUT NON NECESSARY */
        className={`flex w-full items-center justify-between border-b border-secondary-hover bg-main px-5 py-2.5`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src={"/images/mowgli-tattoo-studio-logo.png"}
              width={50}
              height={50}
              alt="Logo de Mowgli Studio Tattoo"
            />
          </Link>
        </div>
        <div
          className="flex cursor-pointer items-center gap-x-[10px]"
          onClick={() => setOpen(!open)}
        >
          <p className="pt-0.5 uppercase text-text">Menu</p>
          <div className={"flex h-[14px] w-[14px] flex-col gap-y-1"}>
            <span
              className={`min-h-[2px] w-full rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`min-h-[2px] w-full rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`min-h-[2px] w-full rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* NAVIGATION APPEARS FROM THE LEFT  */}
      <nav
        className={`fixed inset-x-0 bottom-0 top-[71px] z-50 h-[calc(100vh-71px)] w-full bg-main transition-all duration-300 ease-in-out ${
          open ? "left-0" : "-left-full"
        } `}
      >
        <ul className="flex flex-col gap-5 px-5 pt-5">
          {navLinks.map((navitem, index) => {
            return (
              <li key={index} className="w-full">
                <Link
                  href={navitem.url}
                  key={index}
                  className="block w-full border-b border-border-dark pb-5 text-lg font-semibold uppercase text-text transition-all duration-300 ease-in-out active:text-secondary-active"
                >
                  {navitem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderMobile;
