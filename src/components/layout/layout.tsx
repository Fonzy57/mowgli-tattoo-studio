// REACT & NEXT
import { ReactNode } from "react";

// COMPONENTS
import Header from "../header/header";
import HeaderMobile from "../header/header-mobile";

// TYPING
export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="sticky top-0 z-50 hidden lg:block">
        <Header />
      </div>
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
