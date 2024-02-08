import type { ReactNode } from "react";
import Sidebar from "../Sidebar";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-[calc(100%-var(--nav-narrow-width))] md:w-[calc(100%-var(--nav-medium-width))] ml-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
