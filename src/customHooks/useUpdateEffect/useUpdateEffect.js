import { useEffect, useRef } from "react";

export function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);
  console.log("####: firstRenderRef", firstRenderRef);

  useEffect(() => {
    console.log("####: useEffect in useUpdateEffect");
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
}
