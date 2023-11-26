import moment from "moment";
import { useNavigate } from "react-router-dom";

import { LongProfile } from "@/components/atoms/profile";
import { PopularCommunityProps } from "@/types";

import { Container } from "./style";

const PopularCommunityBox = ({ data }: { data: PopularCommunityProps }) => {
  const navigate = useNavigate();
  let topicId = 0;
  if (data.area === "일자리-노동") {
    topicId = 1;
  } else if (data.area === "주거-사회안전망") {
    topicId = 2;
  } else if (data.area === "환경") {
    topicId = 3;
  } else if (data.area === "교육") {
    topicId = 4;
  }

  return (
    <Container onClick={() => navigate(`/detailcommunity/${topicId}/${data.id}`)}>
      <LongProfile
        nickname={data.nickname}
        profileImg={data.profileImg}
        date={moment(data.date).format("YYYY.MM.DD")}
      />
      <p className="text">{data.communityText}</p>
    </Container>
  );
};

export default PopularCommunityBox;
