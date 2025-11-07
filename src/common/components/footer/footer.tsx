// REACT & NEXT
import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import { CustomIcon } from "../icons/icon";
import { IconName } from "../icons/icon.enum";

// CONFIG
import {
  socialsLinksGrigri,
  socialsLinksMowgli,
  socialsLinksNewbyPics,
} from "@/config/socials-links.config";
import { mowgliCongif } from "@/config/config";

const year = new Date().getFullYear();

const about = [
  {
    name: "mail",
    label: mowgliCongif.contactMail,
    icon: <CustomIcon name={IconName.Envelope} size={20} />,
  },
  {
    name: "address",
    label: "2a Rue des Pépinières,",
    label2: "57050 Longeville-lès-Metz",
    icon: <CustomIcon name={IconName.Location} size={20} />,
    url: "https://www.google.com/maps/place/Mowgli+Tattoo+Studio/@49.1142368,6.1513987,17z/data=!3m1!4b1!4m6!3m5!1s0x4794db436d6f191b:0x934c49988085554a!8m2!3d49.1142333!4d6.1539736!16s%2Fg%2F11rxbs3sxs?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
  },
];

const socialsMowgli = [
  {
    name: "insta",
    label: "Instagram",
    icon: <CustomIcon name={IconName.Instagram} size={20} />,
    url: socialsLinksMowgli.instagram,
  },
  {
    name: "facebook",
    label: "Facebook",
    icon: <CustomIcon name={IconName.Facebook} size={20} />,
    url: socialsLinksMowgli.facebook,
  },
];

const other = [
  {
    name: "grigri",
    label: "Le Grigri Tattoo",
    socials: [
      {
        name: "instagram",
        label: <CustomIcon name={IconName.Instagram} size={20} />,
        url: socialsLinksGrigri.instagram,
        ariaLabel: "Lien vers le profil Instagram Le Grigri Tattoo",
      },
      {
        name: "wp",
        label: <CustomIcon name={IconName.Wordpress} size={20} />,
        url: socialsLinksGrigri.site,
        ariaLabel: "Lien vers le profil Wordpress Le Grigri Tattoo",
      },
    ],
  },
  {
    name: "newby",
    label: "Newby.pics",
    socials: [
      {
        name: "instagram",
        label: <CustomIcon name={IconName.Instagram} size={20} />,
        url: socialsLinksNewbyPics.instagram,
        ariaLabel: "Lien vers le profil Instagram de Newby Pics",
      },
      {
        name: "fb",
        label: <CustomIcon name={IconName.Facebook} size={20} />,
        url: socialsLinksNewbyPics.facebook,
        ariaLabel: "Lien vers le profil Facebook de Newby Pics",
      },
    ],
  },
];

const legalLinks = [
  { label: "Mentions légales", link: "/mentions-legales" },
  {
    label: "Politique de confidentialité",
    link: "/politique-de-confidentialite",
  },
  { label: "Politique de cookies", link: "/politique-de-cookies" },
];

const Footer = () => {
  const titleStyle =
    "font-cera uppercase font-bold text-xl text-text cursor-default";
  const listStyle = "mt-4 text-text flex flex-col gap-y-3";

  return (
    <div className="bg-main px-5 pb-6 pt-14 sm:pt-20 lg:pt-8">
      <div className="mx-auto flex flex-col items-center justify-center lg:w-[1325px] lg:flex-row lg:justify-between xl:w-[1560px]">
        <Image
          src="/images/the-mowgli-studio-logo-brown.svg"
          alt="Logo de The Mowgli Studio"
          width={286}
          height={107}
        />
        <div className="mt-14 flex w-full flex-col justify-center gap-y-10 sm:flex-row sm:gap-x-20 lg:w-1/2 lg:justify-between lg:gap-x-0">
          <div className="">
            <p className={titleStyle}>A propos</p>
            <div className={listStyle}>
              {about.map((item, index) => {
                return item.url ? (
                  <Link
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
                  >
                    <div className="flex items-center gap-x-3">
                      <div>{item.icon}</div>
                      <div>
                        <p>{item.label}</p>
                        {item.label2 && <p>{item.label2}</p>}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div key={index} className="flex items-center gap-x-3">
                    <div>{item.icon}</div>
                    <div>
                      <p>{item.label}</p>
                      {item.label2 && <p>{item.label2}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className={titleStyle}>Reseaux</p>
            <div className={listStyle}>
              {socialsMowgli.map((item, index) => {
                return (
                  <div className="w-max" key={index}>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
                    >
                      <div key={index} className="flex items-center gap-x-3">
                        <div>{item.icon}</div>
                        <p>{item.label}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className={titleStyle}>Collaborations</p>
            <div className={listStyle}>
              {other.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-4">
                    <p className="cursor-default">{item.label}</p>
                    <div className="flex items-center gap-x-4 sm:gap-x-3 lg:gap-x-2">
                      {item.socials.map((social, index2) => {
                        return (
                          <Link
                            key={index2}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
                            aria-label={social.ariaLabel}
                          >
                            <div>{social.label}</div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-20 text-center text-xs text-text lg:mt-14 xl:mt-16">
        © Mowgli Tattoo Studio {year} - Tous droits réservés | v
        {mowgliCongif.version}
      </p>
      <p className="mt-2 text-center text-xs text-text">
        Site développé par{" "}
        <Link
          href="https://stephane-scheeres.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition duration-300 ease-in-out hover:text-secondary-hover hover:no-underline active:text-secondary-active"
        >
          Stéphane Scheeres
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4">
        {legalLinks.map((legal, index) => {
          return (
            <Link
              key={index}
              href={legal.link}
              className="block w-max text-xs text-text underline transition duration-300 ease-in-out hover:text-secondary-hover hover:no-underline active:text-secondary-active"
              scroll={false}
            >
              {legal.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
