import { useState } from "react";

import { useNavigate } from "react-router-dom";

import arrow from "@/assets/discussedTopic/arrow_right.svg";
import donut from "@/assets/discussedTopic/donut_topic.svg";
import background4 from "@/assets/discussedTopic/topic1.png";
import background1 from "@/assets/discussedTopic/topic2.png";
import background2 from "@/assets/discussedTopic/topic3.png";
import background3 from "@/assets/discussedTopic/topic4.png";
import plus from "@/assets/discussedTopic/topic_plus.svg";
import { discussedTopicProps } from "@/types";

import { Container, Hover, Main, Title } from "./style";

const background = [background1, background2, background3, background4];

const Topic = ({ title, subTitles, idx }: discussedTopicProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const spaceToDetailPage = (subTitle: string) => {
    console.log(subTitle); // 주제별 상세페이지로 이동 로직
    const name = encodeURI(encodeURIComponent(subTitle));
    navigate(`/detail/${name}`);
  };

  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Hover $hover={hover}>
        <div className="text">{title}</div>
        <div className="sub_text">
          {subTitles.map((subTitle, idx) => (
            <div
              className="sub_item"
              key={idx}
              onClick={() => spaceToDetailPage(subTitle)}
            >
              <p>{subTitle}</p>
              <img
                src={arrow}
                alt=">"
              />
            </div>
          ))}
        </div>
      </Hover>

      <Main $hover={hover}>
        <Title
          $hover={hover}
          $idx={idx}
        >
          <div className="text">{title}</div>
          <img
            className="donut"
            src={donut}
            alt="O"
          />
          <img
            className="plus"
            src={plus}
            alt="+"
          />
        </Title>
        <img
          className="topicBackground"
          src={background[idx]}
          alt="background"
        />
      </Main>
    </Container>
  );
};

export default Topic;
