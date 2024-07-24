import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
