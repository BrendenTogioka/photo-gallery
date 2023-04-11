"use client";

import Gallery from "../components/Gallery";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

const tabs = [
  { key: "all", display: "All" },
  { key: "oceans", display: "Oceans" },
  { key: "mountains", display: "Mountains" },
];

async function getOceans() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=oceans&per_page=10&client_id=${process.env.unsplashKey}`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ocean pics :(");
  }

  return res.json();
}

async function getMountains() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=mountains&per_page=10&client_id=${process.env.unsplashKey}`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch mountain pics :(");
  }

  return res.json();
}

export default async function Home() {
  const oceansData = getOceans();
  const mountainsData = getMountains();

  const [oceans, mountains] = await Promise.all([oceansData, mountainsData]);

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
              <Gallery photos={[...oceans.results, ...mountains.results]} />
            </Tab.Panel>
            <Tab.Panel>
              <Gallery photos={oceans.results} />
            </Tab.Panel>
            <Tab.Panel>
              <Gallery photos={mountains.results} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
