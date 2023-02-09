import "./App.css";
import { useState } from "react";
function Card(title) {
  return (
    <div className="card">
      <h3>{title.title}</h3>
    </div>
  );
}
function App() {
  const [title, setTitle] = useState([
    "React를 배워봅시다",
    "useState를 배워봅시다",
    "자바스크립트를 배워봅시다.",
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={(e) => {
            if (inputValue === "") {
              e.preventDefault();
            } else {
              let copyTitle = [...title];
              copyTitle.unshift(inputValue);
              setTitle(copyTitle);
            }
          }}
        >
          추가하기
        </button>
      </div>
      <ul className="cardList">
        {title.map((title) => (
          <li>
            <Card title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
