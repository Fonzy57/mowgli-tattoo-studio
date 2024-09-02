// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

/* TODO AJOUTER LES LIENS SI JE FAIS DES PAGES OU DES SCROLLS SI JE FAIS DES ANCRES */
const navLinks = [
  /* { name: "home", label: "Accueil", url: "#", isActive: false }, */
  { name: "studio", label: "Le studio", url: "#", isActive: false },
  { name: "projects", label: "Mes projets", url: "#", isActive: false },
  { name: "contact", label: "Contact", url: "#", isActive: false },
];

const Header = () => {
  return (
    /* TODO AJOUTER UNE SHADOW QUAND ON COMMENCE A SCROLL */
    <div className="w-full bg-main min-h-[80px]">
      <div className="flex items-center justify-between w-[1170px] mx-auto xl:w-[1560px] ">
        <Link href={"/"}>
          <Image
            src={"/mowgli-tatoo-studio-logo.png"}
            width={80}
            height={80}
            alt="Logo de Mowgli Studio Tatoo"
          />
        </Link>
        <ul className="flex gap-8 font-cera uppercase ">
          {navLinks.map((link, index) => {
            return (
              <Link
                href={link.url}
                className="font-bold text-xl text-text hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-out"
              >
                <li key={index}>{link.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
