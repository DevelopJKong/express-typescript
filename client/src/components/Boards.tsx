import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";

interface IBoardType {
  id: number;
  title: string;
  content: string;
  boardImg: string;
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Boards = () => {
  const [board, setBoard] = useState<IBoardType[]>([]);
  const callApi = async () => {
    const data = await (await fetch(`/api/boards`)).json();
    setBoard(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  if (board.length >= 7) {
    board.length = 6;
  }
  return (
    <Container>
      {board.map((item) => (
        <BoardItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Boards;
