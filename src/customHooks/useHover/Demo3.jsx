import { useHover } from "./useHover";

export function Demo3() {
  const { hovered, ref } = useHover();

  return (
    <div className="demo " ref={ref}>
      <span className="hover">
        {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
      </span>
    </div>
  );
}
