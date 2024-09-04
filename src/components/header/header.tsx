// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

// CONFIG
import { navLinks } from "@/config/nav";

const Header = () => {
  return (
    /* TODO AJOUTER UNE SHADOW QUAND ON COMMENCE A SCROLL */
    <div className="w-full bg-main min-h-[80px] flex justify-center items-center">
      <div className="flex items-center justify-between w-[1170px] mx-auto xl:w-[1560px]">
        <Link href={"/"}>
          <Image
            src={"/images/mowgli-tatoo-studio-logo.png"}
            width={70}
            height={70}
            alt="Logo de Mowgli Studio Tatoo"
          />
        </Link>
        <nav>
          <ul className="flex gap-8 font-cera uppercase ">
            {navLinks.map((navitem, index) => {
              return (
                <Link
                  key={index}
                  href={navitem.url}
                  className="font-bold text-xl text-text hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
                >
                  <li key={index}>{navitem.label}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
