import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "../atoms";

interface IBoardType {
  id: number;
  title: string;
  content: string;
  boardImg: string;
}

const Board = () => {
  const { currentUser } = useRecoilValue(loginSuccessState);
  const [board, setBoard] = useState<IBoardType[]>([]);
  const callApi = async () => {
    const data = await (await fetch(`/api/boards`)).json();
    setBoard(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      {currentUser ? (
        board.map((board) => (
          <div key={board.id}>
            <div>{board.id}</div>
            <div>{board.title}</div>
            <div>{board.content}</div>
            <div>
              <img src={board.boardImg} alt={board.title ?? "id"} />
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div>로그인을 먼저 해주세요  </div>
      )}
    </div>
  );
};

export default Board;
