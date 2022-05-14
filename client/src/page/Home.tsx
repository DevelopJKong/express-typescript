import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { loginSuccessState, logOutState } from "../atoms";

const Container = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul<{ flex: number }>`
  display: flex;
  flex: ${(props) => props.flex};
`;

const NavListItem = styled.li<{ left: string }>`
  padding-right: 20px;
  padding-left: ${(props) => props.left};
`;

const Home = () => {
  const [login, setLogin] = useRecoilState(loginSuccessState);
  const logout = useRecoilValue(logOutState);

  const onLogout = () => {
    setLogin(logout);
    localStorage.setItem("Login", JSON.stringify(logout));
  };

  return (
    <Container>
      <Nav>
        <NavList flex={1}>
          <NavListItem left={"10px"}>Cafe Small House</NavListItem>
        </NavList>

        <NavList flex={4}>
          {login.currentUser ? (
            <NavListItem onClick={onLogout} left={"0px"}>
              <Link to="/">Logout</Link>
            </NavListItem>
          ) : (
            <NavListItem left={"0px"}>
              <Link to="/login">Login</Link>
            </NavListItem>
          )}
          <NavListItem left={"0px"}>
            <Link to="/about">About Me</Link>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default Home;
