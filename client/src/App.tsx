import { useEffect, useState } from "react";
import Router from "./Router";

function App() {
  const [info, setInfo] = useState("");
  const callApi = async () => {
    const data = await (await fetch(`/api`)).json();
    setInfo(data.hello);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Router />
      {info}
    </>
  );
}

export default App;
