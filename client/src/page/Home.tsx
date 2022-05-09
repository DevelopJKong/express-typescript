import React from 'react'
import { useHistory } from 'react-router';

const Home = () => {
  const path = useHistory();
  if(window.location.href.includes("/login")) {
    path.replace("/");
  }
  return (
    <div>
      Home
    </div>
  );
};

export default Home;
