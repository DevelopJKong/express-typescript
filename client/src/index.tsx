//redux 구현 방식에서 recoil로 변경하였습니다 redux는 redux branch를 참고해주세요
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
);
