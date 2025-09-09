// components/ClientMasonryGallery.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import the MasonryGallery component with SSR disabled
const MasonryGallery = dynamic(
  () => import("./PolaroidGallery"), // path to your Gallery component
  { ssr: false, loading: () => <p>Loading gallery...</p> }
);

type Props = {
  images: any[];
};

export default function ClientPolaroidGallery({ images }: Props) {
  return <MasonryGallery images={images} />;
}
