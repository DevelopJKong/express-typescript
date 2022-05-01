import { useEffect } from "react";

function App() {
  const callApi = async () => {
    const data = await (await fetch(`/api`)).json();
    console.log(data);
  };

  useEffect(() => {
    callApi();
  },[]);
  return <div>test</div>;
}

export default App;
