import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import User from "./page/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
