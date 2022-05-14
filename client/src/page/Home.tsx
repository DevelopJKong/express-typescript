import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../redex/store";
import { logoutStart } from "../redex/apiCall"; 

const Home = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch<AppDispatch>();
  const onLogout = () => {
    console.log("click");
    console.log(user);
    logoutStart(dispatch,user);
  }
  console.log(user);
  return (
    <div>
      Home
      {user ? (
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
