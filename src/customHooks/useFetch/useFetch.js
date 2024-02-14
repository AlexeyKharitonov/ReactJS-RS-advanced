import { useState } from "react";

export function useFetch(POSTS_URL) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const refetch = ({ params: { _limit } }) => {
    setLoading(true);

    setTimeout(() => {
      fetch(`${POSTS_URL}?_limit=${_limit}`)
        .then((res) => {
          if (!res.ok) throw new Error("Ошибка запроса!");
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log("####: error", error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}

export function Demo() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="demo">
      <div className="btn">
        <button
          className="fetch-btn"
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && <div className="fetch-load">Загрузка...</div>}
      {error && <div className="fetch-error">Произошла ошибка</div>}
      {data &&
        !isLoading &&
        data.map((item) => (
          <div className="fetch-item" key={item.id}>
            {item.title}
          </div>
        ))}
    </div>
  );
}
