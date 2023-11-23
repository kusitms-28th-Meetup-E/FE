import { useNavigate } from "react-router-dom";

import { TopicTag } from "@/components/atoms/tag";
import { SearchTopicProps } from "@/types";

import { Container } from "./style";

const SearchTopicBox = ({ data }: { data: SearchTopicProps }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/detail/${encodeURI(encodeURIComponent(data.issueTitle))}`)}
    >
      <div className="textBox">
        <TopicTag category={data.topicTitle} />
        <div className="topic">{data.issueTitle}</div>
        <div className="oneLine">{data.issueDetail}</div>
      </div>
      <img
        height={156}
        src={data.imgUrl}
        alt="이미지"
      />
    </Container>
  );
};

export default SearchTopicBox;
