import { useState } from "react";

import "./App.css";
import SearchBAr from "../SearchBar/SearchBar";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBAr />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
