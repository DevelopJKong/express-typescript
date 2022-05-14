import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginSuccessState, logOutState } from "../atoms";

const Home = () => {
  const [login, setLogin] = useRecoilState(loginSuccessState);
  const logout = useRecoilValue(logOutState);

  const onLogout = () => {
    setLogin(logout);
    localStorage.setItem("Login", JSON.stringify(logout));
  };
  

  return (
    <div>
      Home
      {login.currentUser ? (
        <span onClick={onLogout}>
          <Link to="/">Logout</Link>
        </span>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
