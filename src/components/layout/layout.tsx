import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>
        <p>HEADER</p>
      </div>
      <div className="hidden tablet:block mobile:block">
        <p>HEADER MOBILE</p>
      </div>
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
