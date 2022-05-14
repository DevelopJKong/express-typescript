import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "./atoms";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import User from "./page/User";

const Router = () => {
  const login = useRecoilValue(loginSuccessState);
  localStorage.setItem("Login", JSON.stringify(login));
  
  if(new Date(login.expire).getMinutes() !== new Date(Date.now()).getMinutes()){
    localStorage.clear();
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
         {login.currentUser ? <Redirect to="/"/> : <Login /> }
        </Route>
        <Route path="/Register">
         {login.currentUser ? <Redirect to="/"/> : <Register /> }
        </Route>
        <Route path="/user">
          <User />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
