import { useLocalStorage } from "./useLocalStorage";

export function Demo2() {
  const [token, { setItem, removeItem }] = useLocalStorage("token");

  return (
    <div className="demo">
      <p className="token">Твой токен: {token}</p>
      <div className="btns">
        <button
          className="token-btn"
          style={{ marginRight: "10px" }}
          onClick={() => setItem("new-token")}
        >
          Задать токен
        </button>
        <button className="token-btn" onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}
