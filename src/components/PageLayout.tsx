import { ReactNode } from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";

interface PageLayoutProps {
  pageName: string;
  children: ReactNode;
}

export default function PageLayout({ pageName, children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <Breadcrumb pageName={pageName} />
      <main className="page-content">{children}</main>
    </>
  );
}
