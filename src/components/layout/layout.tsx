// REACT & NEXT
import { useRouter } from "next/router";
import { ReactNode } from "react";

// FRAMER MOTION
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import Header from "../header/header";
import HeaderMobile from "../header/header-mobile";
import Footer from "../footer/footer";
import PageTransition from "../page-transition/page-transition";

// TYPING
export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className="bg-bgDark">
      <div className="sticky top-0 z-50 hidden lg:block">
        <Header />
      </div>
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={router.pathname}>{children}</PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
