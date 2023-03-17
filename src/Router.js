import { Routes, Route } from "react-router";

import Counter from "./Components/Counter";
import Home from "./Components/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mtg" element={<Counter />} />
    </Routes>
  );
};

export default Router;
