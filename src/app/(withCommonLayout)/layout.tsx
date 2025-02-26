import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/headers/Headers";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
