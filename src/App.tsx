import React from "react";
import { Counter } from "./features/counter/Counter";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";

import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
