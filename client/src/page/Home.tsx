import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "../atoms";

const Home = () => {
  const { currentUser } = useRecoilValue(loginSuccessState);
  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      Home
      {currentUser ? (
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
