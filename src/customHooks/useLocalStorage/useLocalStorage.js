import { useState } from "react";

export function useLocalStorage(tokenKey) {
  const currentToken = localStorage.getItem(tokenKey);
  const [token, setToken] = useState(currentToken);

  const setItem = (newToken) => {
    console.log("####: ", newToken);
    localStorage.setItem(tokenKey, newToken);
    setToken((prev) => (prev = newToken));
  };

  const removeItem = () => {
    localStorage.removeItem(tokenKey);
    setToken("");
  };

  return [
    token,
    {
      setItem,
      removeItem,
    },
  ];
}
