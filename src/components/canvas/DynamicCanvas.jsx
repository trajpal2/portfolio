"use client";

import dynamic from "next/dynamic";

const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="canvas-loader" />
  </div>
);

export const ComputersCanvas = dynamic(() => import("./Computers"), {
  ssr: false,
  loading: CanvasLoader,
});

export const EarthCanvas = dynamic(() => import("./Earth"), {
  ssr: false,
  loading: CanvasLoader,
});

export const StarsCanvas = dynamic(() => import("./Stars"), {
  ssr: false,
  loading: () => null,
});
