import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "./atoms";
import Home from "./page/Home";
import Login from "./page/Login";
import User from "./page/User";

const Router = () => {
  const { currentUser } = useRecoilValue(loginSuccessState);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
   
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
