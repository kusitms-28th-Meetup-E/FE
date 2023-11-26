import { useNavigate } from "react-router-dom";

import bg from "@/assets/discussedTopic/topic1.png";
import { TopicTag } from "@/components/atoms/tag";
import { ToptopicProps, SimilarTopicProps } from "@/types";

import { Container, Top, Bottom, Middle } from "./style";

export const SimilarTopicBox = ({ data }: { data: SimilarTopicProps }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`,
    backgroundSize: "cover",
  };
  const navigate = useNavigate();

  const spaceToDetail = (title: string) => {
    const name = encodeURI(encodeURIComponent(title));
    navigate(`/detail/${name}`);
    window.location.reload();
    window.scrollTo({ top: 0 });
  };

  return (
    <Container
      style={containerStyle}
      $string="similar"
      onClick={() => spaceToDetail(data.title)}
    >
      <Top>
        <div className="title">{data.title}</div>
        <TopicTag category={data.category} />
      </Top>
      <Bottom>
        <p>{data.subscribeCount}명</p>이 구독하고 있어요
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
        <div className="title">{data.issue}</div>
        <TopicTag category={data.topic} />
      </Middle>
    </Container>
  );
};

export const Top5TopicBox = ({ data }: { data: ToptopicProps }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${data.imgUrl})`,
    backgroundSize: "cover",
  };
  const navigate = useNavigate();

  return (
    <Container
      style={containerStyle}
      $string="top"
      onClick={() => navigate(`/detail/${encodeURI(encodeURIComponent(data.title))}`)}
    >
      <Middle>
        <div className="title">{data.title}</div>
        <TopicTag category={data.category} />
      </Middle>
    </Container>
  );
};
