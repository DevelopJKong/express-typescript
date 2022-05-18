import styled from "styled-components";
import Boards from "../components/Boards";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Slider from "../components/Slider";

const Container = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Nav />
      <Slider />
      <Boards />
      <Categories />
      <Footer />
    </Container>
  );
};

export default Home;
