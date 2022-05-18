import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginFailureState, loginSuccessState } from "../atoms";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.imgur.com/dtuN6qr.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: -1px 0px 19px -1px rgb(0 0 0 / 30%);
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.5);
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
  background-color: #9b8281;
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

const LinkBtn = styled(Link)`
  padding-bottom: 12px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
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
  const setLoginSuccess = useSetRecoilState(loginSuccessState);
  const [loginFailure, setLoginFailure] = useRecoilState(loginFailureState);

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

      return setLoginSuccess({
        currentUser: username,
        token: userData.token,
        isFetching: false,
        error: false,
        expire: Date.now(),
      });
    } catch (error) {
      return setLoginFailure(loginFailure);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("Login", JSON.stringify(loginSuccess));
  // }, [loginSuccess]);

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <LogoImg src="https://i.imgur.com/dtuN6qr.png" />
        </ImgWrapper>
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
          <LinkBtn to={`/register`}>CREATE A NEW ACCOUNT &rarr;</LinkBtn>
          <LinkBtn to={`/`}>GO BACK HOME &rarr;</LinkBtn>
          <LinkBtn to={`/find`}>
            DO NOT YOU REMEMBER THE PASSWORD? &rarr;
          </LinkBtn>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
