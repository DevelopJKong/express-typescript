import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "./atoms";
import Home from "./page/Home";
import Login from "./page/Login";
import User from "./page/User";

const Router = () => {
  const { currentUser } = useRecoilValue(loginState);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{currentUser ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
