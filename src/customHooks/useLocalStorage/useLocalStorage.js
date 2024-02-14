import { useState, useEffect } from "react";

function getValueStorage(key, initialState) {
  const saveValue = JSON.parse(localStorage.getItem(key));

  if (saveValue) {
    return saveValue;
  }

  if (initialState instanceof Function) {
    return initialState();
  }

  return initialState;
}

export function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => getValueStorage(key, initialState));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
