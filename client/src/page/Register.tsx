import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";

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
  width: 50px;
  height: 50px;
  border-radius: 25px;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #9b8281;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Error = styled.span`
  color: red;
`;

interface IForm {
  username: string;
  password: string;
  confirmationPassword: string;
  name: string;
  email: string;
  regison: string;
  extraError?: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const path = useHistory();
  const onValid = async (data: IForm) => {
    if (data.password !== data.confirmationPassword) {
      setError(
        "confirmationPassword",
        {
          message: "Passowrd are not the same",
        },
        { shouldFocus: true }
      );
      return;
    }

    try {
      const userData = await (
        await fetch(`/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();

      if (userData.message === "the username already exists") {
        throw Error;
      }

      return userData && path.push("/");
    } catch (error) {
      setError("extraError", { message: "Server offline" });
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <LogoImg src="https://i.imgur.com/dtuN6qr.png" />
        </ImgWrapper>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            type="text"
            placeholder="username"
            {...register("username", {
              required: true,
              minLength: { value: 3, message: "Your username is too short" },
              validate: {
                noNick: (value) => value.includes("nick") ? "no nick allowed" : true
              },
            })}
          />
          <Error>{errors?.username?.message}</Error>

          <Input
            type="password"
            placeholder="password"
            {...register("password", {
              required: {
                value: true,
                message: "Your password is too short",
              },
            })}
          />
          <Error>{errors?.password?.message}</Error>
          <Input
            type="password"
            placeholder="confirm password"
            {...register("confirmationPassword", {
              required: {
                value: true,
                message: "Your confirm password is too short",
              },
            })}
          />
          <Error>{errors?.confirmationPassword?.message}</Error>
          <Input
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
              minLength: { value: 5, message: "Your name is too short" },
            })}
          />
          <Error>{errors?.name?.message}</Error>
          <Input
            type="email"
            placeholder="email"
            {...register("email", {
              required: true,
              minLength: { value: 5, message: "Your name is too short" },
            })}
          />
          <Error>{errors?.email?.message}</Error>
          <Input
            type="text"
            placeholder="regison"
            {...register("regison", {
              required: true,
              minLength: { value: 2, message: "Your name is too short" },
            })}
          />
          <Error>{errors?.email?.message}</Error>
          <Error>{errors?.extraError?.message}</Error>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <Error>{errors?.password?.message}</Error>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
