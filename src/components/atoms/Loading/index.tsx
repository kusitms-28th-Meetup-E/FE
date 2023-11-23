import { SyncLoader } from "react-spinners";

import { LoadingBox } from "./style";
const Loading = () => {
  return (
    <LoadingBox>
      <div className="box">
        <h3>잠시만 기다려주세요.</h3>
        <SyncLoader />
      </div>
    </LoadingBox>
  );
};

export default Loading;
