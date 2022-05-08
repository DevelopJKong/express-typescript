import { useEffect, useState } from "react";

interface Type {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  avatar: string;
}

const User = () => {
  const [user, setUser] = useState<Type[]>([]);
  const callApi = async () => {
    const data = await (await fetch(`/api/user`)).json();
    setUser(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      {user &&
        user.map((user) => (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.password}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.avatar}</div>
            <hr/>
          </div>
        ))}
    </div>
  );
};

export default User;
