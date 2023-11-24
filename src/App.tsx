/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilValue } from "recoil";

import ChallengeToast from "./components/atoms/toast";
import { ToastState } from "./recoil/atoms";
import Router from "./router/router";
import { GlobalStyle } from "./style/global";

function App() {
  const Toast = useRecoilValue(ToastState);

  return (
    <>
      {Toast ? <ChallengeToast message="로그인을 진행해 주세요" /> : ""}

      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
