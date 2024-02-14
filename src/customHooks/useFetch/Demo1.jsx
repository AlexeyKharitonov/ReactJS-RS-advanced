import { useFetch } from "./useFetch";

export function Demo1() {
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
