import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useViewportSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const updateSize = () => {
    setSize((prev) => ({
      ...prev,
      height: window.innerHeight,
      width: window.innerWidth,
    }));
  };

  useWindowEvent("resize", updateSize);

  return {
    height: size.height,
    width: size.width,
  };
}
