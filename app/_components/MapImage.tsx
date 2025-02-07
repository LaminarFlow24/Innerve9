"use client"; // Ensures it runs only on the client-side

import Image from "next/image";
import { useEffect, useState } from "react";

interface MapImageProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  width?: number;
  height?: number;
}

const MapImage = ({
  latitude,
  longitude,
  zoom = 14,
  width = 512,
  height = 512,
}: MapImageProps) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    // if (apiKey) {
    const url = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${longitude},${latitude},${zoom}/${width}x${height}?access_token=pk.eyJ1IjoidGFuaXNodmFsZXNoYSIsImEiOiJjbTZ1aWU3ZTkwYTJ5MnJzYWVmN211bnA0In0.VtYlZsYXvDXpa-pyJefFQA`;
    console.log(url);
    setImageUrl(url);
    // }
  }, [latitude, longitude, zoom, width, height]);

  if (!imageUrl || (!longitude && !latitude)) {
    return <p className="text-gray-500">Loading satellite image...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Satellite View</h2>
      <Image src={imageUrl} alt="Satellite Map" width={width} height={height} />
    </div>
  );
};

export default MapImage;
