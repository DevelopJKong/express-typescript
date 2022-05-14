import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import User from "./page/User";
import { RootState } from "./redex/store";
const Router = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login" >
          {user ?  <Redirect to="/"/> : <Login />}
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
