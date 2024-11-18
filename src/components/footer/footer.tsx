// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { CustomIcon } from "../icons/icon";
import { IconName } from "../icons/icon.enum";

// CONFIG
import { version } from "@/config/version";
import {
  socialsLinksMowgli,
  socialsLinksNewbyPics,
} from "@/config/socials-links";

const year = new Date().getFullYear();

const about = [
  {
    name: "mail",
    label: "mail.mowgli@gmail.com", // TODO METTRE LA BONNE ADRESSE
    icon: <CustomIcon name={IconName.Envelope} size={20} />,
  },
  {
    name: "address",
    label: "2a Rue des Pépinières,",
    label2: "57050 Longeville-lès-Metz",
    icon: <CustomIcon name={IconName.Location} size={20} />,
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
        url: "https://www.instagram.com/legrigritattoo/",
      },
      {
        name: "wp",
        label: <CustomIcon name={IconName.Wordpress} size={20} />,
        url: "https://legrigritattoofr.wordpress.com/",
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
      },
      {
        name: "fb",
        label: <CustomIcon name={IconName.Facebook} size={20} />,
        url: socialsLinksNewbyPics.facebook,
      },
    ],
  },
];

const Footer = () => {
  const titleStyle =
    "font-cera uppercase font-bold text-xl text-text cursor-default";
  const listStyle = "mt-4 text-text flex flex-col gap-y-3";

  return (
    <div className="bg-main pt-20 pb-6">
      <div className="flex justify-between items-center w-[1170px] mx-auto xl:w-[1560px]">
        <Image
          src="/images/the-mowgli-studio-logo-brown.svg"
          alt="Logo de The Mowgli Studio"
          width={286}
          height={107}
        />
        <div className="flex justify-between w-1/2">
          <div className="">
            <h4 className={titleStyle}>A propos</h4>
            <div className={listStyle}>
              {about.map((item, index) => {
                return (
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
            <h4 className={titleStyle}>Reseaux</h4>
            <div className={listStyle}>
              {socialsMowgli.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
                  >
                    <div key={index} className="flex items-center gap-x-3">
                      <div>{item.icon}</div>
                      <p>{item.label}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <h4 className={titleStyle}>Autres</h4>
            <div className={listStyle}>
              {other.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-4">
                    <p className="cursor-default">{item.label}</p>
                    <div className="flex items-center gap-x-2">
                      {item.socials.map((social, index2) => {
                        return (
                          <Link
                            key={index2}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
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
      <p className="text-text text-xs text-center mt-20">
        © Mowgli Tattoo Studio {year} - Tous droits réservés | v{version}
      </p>
      <p className="text-text text-xs text-center mt-2">
        Site développé par{" "}
        <Link
          href="https://www.linkedin.com/in/stephane-scheeres/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
        >
          Stéphane Scheeres
        </Link>
      </p>
    </div>
  );
};

export default Footer;
