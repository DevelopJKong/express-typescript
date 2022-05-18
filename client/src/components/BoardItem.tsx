import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 320px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  box-shadow: -1px 0px 19px -1px rgb(0 0 0 / 10%);
  border-radius:2.222rem;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover ${Info} {
    border-radius:2.2222rem;
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 320px;
  height: 320px;
  background-color: white;
  border-radius: 2.2222rem;
  position: absolute;
`;

const Image = styled.img`
  height: 50%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.p`
    position:absolute;
    z-index:4;
    top:10%;
`;
const Content = styled.div`
    position:absolute;
    z-index:4;
    bottom:15%;
`;


interface Iitem {
  item: {
    id: number;
    title: string;
    content: string;
    boardImg: string;
  };
}

const BoardItem = ({ item }: Iitem) => {
  return (
    <Container>
      <Circle />
      <Image src={item.boardImg} />
      <Title>{item.title}</Title>
      <Content>{item.content.length > 20 ? item.content.slice(0,19) + "..." : item.content}</Content>
      <Info>
        <Icon>
          <Link to={`/boards/${item.id}`}>
            <p>{item.title}</p>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default BoardItem;
