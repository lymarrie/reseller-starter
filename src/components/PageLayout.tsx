import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface PageLayoutProps {
  children?: React.ReactNode;
  data?: any;
}

const PageLayout = ({ children, data }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header data={data}/>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
