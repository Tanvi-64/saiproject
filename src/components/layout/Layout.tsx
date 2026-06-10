import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Offset for fixed header: top bar (34px, desktop only) + nav (64px) */}
      <main className="flex-1 pt-16 md:pt-[98px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
