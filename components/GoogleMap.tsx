"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      setOptions({ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! });

      const { Map } = await importLibrary("maps");
      const { Marker } = await importLibrary("marker");

      const position = { lat: 51.34645450971392, lng: -0.2862267894706906 };

      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 15,
      });

      new Marker({
        map,
        position,
      });
    }

    void init();
  }, []);

  return <div ref={mapRef} className="w-full h-screen" />;
}
