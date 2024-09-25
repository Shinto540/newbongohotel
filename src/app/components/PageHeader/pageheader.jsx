import Link from "next/link";
import React from "react";
import Image from "next/image";

const PageHeader = ({pageTitle}) => {
  return (
    <section className="page__header text-black uppercase flex items-center justify-center h-[40vh] relative"
    style={{ backgroundImage: "url(/assets/pictures/aboutthing.jpg)" }}>
      <div>
      
        <h3 className="text-9xl font-bold text-white uppercase justify-center">{pageTitle}</h3>
      </div>

      <div className="absolute bottom-0 left-0 p-4 text-white">
        <a href="/">Home</a>
        <span>/ {pageTitle}</span>
      </div>
    </section>
  );
};

export default PageHeader;