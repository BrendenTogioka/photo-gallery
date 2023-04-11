"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import ocean1 from "../public/ocean-1.jpeg";
import ocean2 from "../public/ocean-2.jpeg";
import ocean3 from "../public/ocean-3.jpeg";
import ocean4 from "../public/ocean-4.jpeg";
import ocean5 from "../public/ocean-5.jpeg";

const tabs = [
  { key: "all", display: "All" },
  { key: "oceans", display: "Oceans" },
  { key: "mountains", display: "Mountains" },
];

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center h-full">
        <Tab.Group>
          <Tab.List className="flex items-center gap-12 ">
            {tabs.map((tab) => (
              <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span
                    className={classNames(
                      "uppercase text-md font-expletusSans",
                      selected ? "text-white" : "text-stone-600"
                    )}
                  >
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
            <Tab.Panel className="overflow-auto">
              <Masonry
                breakpointCols={2}
                className="flex gap-4"
                columnClassName=""
              >
                <Image src={ocean1} alt="ocean-1" className="my-4" />
                <Image src={ocean2} alt="ocean-2" className="my-4" />
                <Image src={ocean3} alt="ocean-3" className="my-4" />
                <Image src={ocean4} alt="ocean-4" className="my-4" />
                <Image src={ocean5} alt="ocean-5" className="my-4" />
              </Masonry>
            </Tab.Panel>
            <Tab.Panel>Oceans</Tab.Panel>
            <Tab.Panel>Mountains</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
