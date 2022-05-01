import { BrowserRouter,Routes,Route } from "react-router-dom";
import Api from "./Api";




const Router = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/api" element={<Api/>}/>
    </Routes>
  </BrowserRouter>;
};

export default Router;
