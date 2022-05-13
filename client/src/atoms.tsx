import { atom } from "recoil";

export interface ILogin {
    currentUser: string,
    isFetching:boolean,
    error:boolean
}

export const loginState = atom<ILogin>({
    key: "Login",
    default: JSON.parse(localStorage.getItem("Login") || "{}"),
  });
  