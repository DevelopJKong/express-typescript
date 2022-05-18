import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { loginSuccessState, logOutState } from "../atoms";


const Container = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #9B8281;
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
const Nav = () => {
    const [login, setLogin] = useRecoilState(loginSuccessState);
    const logout = useRecoilValue(logOutState);
  
    const onLogout = () => {
      setLogin(logout);
      localStorage.setItem("Login", JSON.stringify(logout));
    };
  return <Container>
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
          {login.currentUser ? (
            <NavListItem left={"0px"}>
              <Link to="/user">User</Link>
            </NavListItem>
          ) : (
            <NavListItem left={"0px"}>
              <Link to="/register">Register</Link>
            </NavListItem>
          )}
        </NavList>
  </Container>;
};

export default Nav;
