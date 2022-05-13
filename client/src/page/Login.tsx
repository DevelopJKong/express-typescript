import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loginFailureState, loginSuccessState } from "../atoms";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://source.unsplash.com/random/1") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: pointer;
  }
`;

const Error = styled.span`
  color: red;
`;

interface IForm {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const [loginSuccess, setLoginSuccess] = useRecoilState(loginSuccessState);
  const [loginFailure, setLoginFailure] = useRecoilState(loginFailureState);
  const onIsFetching = () => {
    localStorage.setItem(
      "Login",
      JSON.stringify({
        isFetching: true,
      })
    );
    setTimeout(() => {
      localStorage.setItem(
        "Login",
        JSON.stringify({
          isFetching: false,
        })
      );
    }, 2000);
  };

  const onValid = async (data: IForm) => {
    const { username } = data;

    try {
      const userData = await (
        await fetch(`/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();

      if (userData.message === "Invalid user or password") {
        throw Error;
      }

      setLoginSuccess({
        currentUser: username,
        token: userData.token,
        isFetching: false,
        error: false,
      });

      window.location.href = "/";
    } catch (error) {
      setLoginFailure(loginFailure);
    }
  };

  useEffect(() => {
    localStorage.setItem("Login", JSON.stringify(loginSuccess));
  }, [loginSuccess]);

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            placeholder="username"
            type="text"
            {...register("username", {
              required: true,
              minLength: { value: 5, message: "Your username is too short" },
            })}
          />
          <Input
            placeholder="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Your password is too short",
              },
            })}
          />
          <Button>LOGIN</Button>
          <Error>{errors?.username?.message}</Error>
          <Error>{errors?.password?.message}</Error>
          <Link to={`/`}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to={`/login`}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
