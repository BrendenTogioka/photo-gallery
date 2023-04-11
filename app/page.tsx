"use client";
import { useRef } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

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
                {images.map((image, idx) => (
                  <Image
                    key={image.src}
                    src={image}
                    alt={image.src}
                    className="my-4 hover:opacity-90 cursor-pointer"
                    placeholder="blur"
                    onClick={() => {
                      lightboxRef.current?.openGallery(idx);
                    }}
                  />
                ))}
              </Masonry>

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={images.map((image) => ({
                  src: image.src,
                  thumb: image.src,
                }))}
              />
            </Tab.Panel>
            <Tab.Panel>Oceans</Tab.Panel>
            <Tab.Panel>Mountains</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
