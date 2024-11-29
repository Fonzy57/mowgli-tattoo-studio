// NEXT
import Link from "next/link";
import { ReactNode } from "react";

// TYPING
interface TextLinkProps {
  href: string;
  children: ReactNode;
  blank?: boolean;
}

const TextLink = ({ href, children, blank }: TextLinkProps) => {
  let target = "_self";
  let rel = "";

  if (blank) {
    target = "_blank";
    rel = "noopener noreferrer";
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="text-main font-semibold hover:text-main-hover active:underline transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default TextLink;
