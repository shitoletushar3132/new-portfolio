"use client";
import Content from "./components/Content";
import HireMe from "./components/HireMe";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[55rem]">
        <div>
          <Navbar />
        </div>

        <Content />
      </div>
    </>
  );
}
