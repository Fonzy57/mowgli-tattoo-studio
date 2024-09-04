// REACT & NEXT
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// CONFIG
import { navLinks } from "@/config/nav";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Empêche le défilement de la page lorsque le menu est ouvert
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.documentElement.style.position = "fixed";
      document.body.style.width = "100%";
      document.documentElement.style.width = "100%";
    };

    // Réactive le défilement de la page lorsque le menu est fermé
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

    // Ferme le menu mobile quand la route a changé
    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      // Réactive le défilement de la page lorsque le composant est démonté
      enableScroll();
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [open, router.events]);

  return (
    <>
      <div
        className={`w-full flex items-center justify-between bg-main border-b border-secondary-hover px-5 py-2.5 ${
          open ? "fixed inset-x-0 top-0 z-50" : ""
        }`}
      >
        <div>
          {/* TODO ICI METTRE UNE IMAGE DIFFERENTE DE LA NAV CLASSIQUE */}
          <Link href={"/"}>
            <Image
              src={"/images/mowgli-tatoo-studio-logo.png"}
              width={50}
              height={50}
              alt="Logo de Mowgli Studio Tatoo"
            />
          </Link>
        </div>
        <div
          className="flex items-center gap-x-[10px] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="uppercase text-text pt-0.5">Menu</p>
          <div className={"flex flex-col gap-y-1 w-[14px] h-[14px]"}>
            <span
              className={`w-full min-h-[2px] rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`w-full min-h-[2px] rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full min-h-[2px] rounded-[20px] bg-secondary-hover transition-all duration-300 ease-in-out ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* TODO NE PAS FAIRE UNE CONDITION ICI MAIS DANS LE CSS POUR FAIRE VENIR LE MENU DE LA GAUCHE */}
      {open && (
        <nav className="w-full bg-main z-50 h-[calc(100vh-71px)] fixed inset-x-0 top-[71px] bottom-0">
          <ul className="px-5 pt-5 flex flex-col gap-5">
            {navLinks.map((navitem, index) => {
              return (
                <Link
                  href={navitem.url}
                  key={index}
                  className="text-lg uppercase text-text font-semibold active:text-secondary-active transition-all duration-300 ease-in-out"
                >
                  <li className="w-full pb-5 border-b border-border-dark">
                    {navitem.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default HeaderMobile;
