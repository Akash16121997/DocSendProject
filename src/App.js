import { useState } from "react";
import "./App.css";
import { dateArray } from "./data/data";
import ToggleView from "./components/ToggleView";
import DateDropdown from "./components/DateDropdown";
import StrategyList from "./components/StrategyList";

function App() {
  const [view, setView] = useState("Bullish");
  const [date, setDate] = useState(dateArray[0]);

  return (
    <div className="container">
      <ToggleView view={view} setView={setView} />

      <DateDropdown date={date} setDate={setDate} />

      <StrategyList view={view} date={date} />
    </div>
  );
}

export default App;
