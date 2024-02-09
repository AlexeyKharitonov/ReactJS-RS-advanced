import { useState } from "react";
import "./App.css";

const CARDS = [
  {
    id: 8721,
    name: "Alexey",
    like: false,
  },
  {
    id: 5261,
    name: "Vitaly",
    like: false,
  },
  {
    id: 8764,
    name: "Kirill",
    like: false,
  },
  {
    id: 2352,
    name: "Max",
    like: false,
  },
];

function Card({ name, isLike, onClick }) {
  return (
    <div>
      {/* <span>{name}</span> */}
      {/* <input type="text" /> */}
      <p>{name}</p>
      <button onClick={onClick}>{isLike ? "Unlike" : "Like"}</button>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState(CARDS);

  const handleLikeClick = (id) => {
    const cardCopy = cards.map((item) => {
      const copyItem = { ...item };
      if (item.id === id) {
        copyItem.like = !copyItem.like;
      }

      return copyItem;
    });
    setCards(cardCopy);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-grid">
          {cards.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              isLike={item.like}
              onClick={() => handleLikeClick(item.id)}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

// function App() {
//   const [items, setItems] = useState([1, 1, 2, 3, 4, 5]);
//   console.log(items);

//   const handleClick = () => {
//     setItems([...items, items.length]);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {items.map((item, index) => {
//           return <div key={index}>{item}</div>;
//         })}
//         <button onClick={handleClick}>Add</button>
//       </header>
//     </div>
//   );
// }

// export default App;
