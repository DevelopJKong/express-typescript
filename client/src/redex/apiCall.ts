import { AppDispatch } from "./store";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (
  dispatch: AppDispatch,
  user: { username: string; password: string }
) => {
  dispatch(loginStart());
  try {
    const data = await (
      await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
    ).json();
    if (data.message === "Invalid user or password" ) {
       throw Error();
    }
    dispatch(loginSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};
