import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstCompnent";
function App() {
  const expenses = [
    {
      //e1
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new date(2902, 11, 23),
    },
    {
      // e2
      id: "e2",
      title: "free dasam milk",
      amount: 35,
      date: new date(2222, 8, 22),
    },
    {
      //e3
      id: "e3",
      title: "nescafe milky",
      amount: 2,
      date: new date(2023, 1, 31),
    },
  ];
  return (
    <div>
      <h1>e1</h1>
      <FirstComponent></FirstComponent>
      <h1>e2</h1>
      <h1>e3</h1>
    </div>
  );
}

export default App;
