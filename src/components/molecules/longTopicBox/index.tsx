import bg from "@/assets/discussedTopic/topic1.png";
import { TopicTag } from "@/components/atoms/tag";
import { ToptopicProps, SimilarTopicProps } from "@/types";

import { Container, Top, Bottom, Middle } from "./style";

export const SimilarTopicBox = ({ data }: { data: SimilarTopicProps }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`,
    backgroundSize: "cover",
  };
  return (
    <Container
      style={containerStyle}
      $string="similar"
    >
      <Top>
        <div className="title">{data.issueTitle}</div>
        <TopicTag category={data.topicTitle} />
      </Top>
      <Bottom>
        <p>80명</p>이 구독하고 있어요
      </Bottom>
    </Container>
  );
};

export const TopTopicBox = ({ data }: { data: ToptopicProps }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`,
    backgroundSize: "cover",
  };
  return (
    <Container
      style={containerStyle}
      $string="top"
    >
      <Middle>
        <div className="title">{data.title}</div>
        <TopicTag category={data.category} />
      </Middle>
    </Container>
  );
};
