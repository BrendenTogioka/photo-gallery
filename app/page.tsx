"use client";
import { Tab } from "@headlessui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
          <Tab.List className="flex items-center gap-12">
            {tabs.map((tab) => (
              <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span className={selected ? "text-white" : "text-stone-600"}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
            <Tab.Panel className="">All Photos</Tab.Panel>
            <Tab.Panel>Oceans</Tab.Panel>
            <Tab.Panel>Mountains</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
