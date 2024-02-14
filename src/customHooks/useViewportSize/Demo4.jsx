import { useViewportSize } from "./useViewportSize";

export function Demo4() {
  const { height, width } = useViewportSize();

  return (
    <div className="demo">
      Width: {width}, height: {height}
    </div>
  );
}
