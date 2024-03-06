import { Demo1 } from "./customHooks/useFetch/Demo1";
import { Demo2 } from "./customHooks/useLocalStorage/Demo2";
import { Demo3 } from "./customHooks/useHover/Demo3";
import { Demo4 } from "./customHooks/useViewportSize/Demo4";
import "./App.css";

export function App() {
  return (
    <>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
    </>
  );
}
