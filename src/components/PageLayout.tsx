import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";


export interface PageLayoutProps {
  children?: React.ReactNode;
  data?: any;
}

const PageLayout = ({ children, data }: PageLayoutProps) => {

  let backgroundColor;

  if (data.c_backgroundColor) {
    const transformedColor = data.c_backgroundColor.replace(/\s+/g, '').toLowerCase();
    backgroundColor = `--backgroundColor: ${transformedColor}`;
  } else {
    backgroundColor = `--backgroundColor: white`;
  }

  return (
    <>
      <style>:root {`{${backgroundColor}}`}</style>
      <div className="min-h-screen" >
        <Header data={data}/>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
