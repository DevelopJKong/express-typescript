import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "../atoms";

interface IUserType {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  avatar: string;
}

const User = () => {
  const { currentUser } = useRecoilValue(loginSuccessState);
  const [user, setUser] = useState<IUserType[]>([]);
  const callApi = async () => {
    const data = await (await fetch(`/api/user`)).json();
    setUser(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      {currentUser
        ? user &&
          user.map((user) => (
            <div key={user.id}>
              <div>{user.id}</div>
              <div>{user.username}</div>
              <div>{user.password}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.avatar}</div>
              <hr />
            </div>
          ))
        : <div>please login first</div>}
    </div>
  );
};

export default User;
