import { useRef } from "react";
import Image from "next/image";

import Masonry from "react-masonry-css";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery({ photos }) {
  const lightboxRef = useRef(null);
  return (
    <>
      <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
        {photos.map((photo, idx) => (
          <Image
            key={photo.id}
            src={photo.urls.full}
            alt={`${photo.alt_description}` | photo.id}
            width={photo.width}
            height={photo.height}
            className="my-4 hover:opacity-90 cursor-pointer"
            // placeholder="blur"
            onClick={() => {
              lightboxRef.current?.openGallery(idx);
            }}
          />
        ))}
      </Masonry>
      <LightGallery
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={photos.map((photo) => ({
          src: photo.urls.full,
          thumb: photo.urls.thumb,
        }))}
        download={false}
        licenseKey={process.env.lightboxKey}
      />{" "}
    </>
  );
}
