import { useState } from "react";

import arrow from "@/assets/discussedTopic/arrow_right.svg";
import donut from "@/assets/discussedTopic/donut_topic.svg";
import background4 from "@/assets/discussedTopic/topic1_bg.svg";
import background1 from "@/assets/discussedTopic/topic2_bg.svg";
import background2 from "@/assets/discussedTopic/topic3_bg.svg";
import background3 from "@/assets/discussedTopic/topic4_bg.svg";
import plus from "@/assets/discussedTopic/topic_plus.svg";
import { discussedTopicProps } from "@/types";

import { Container, Hover, Main, Title } from "./style";

const background = [background1, background2, background3, background4];

const Topic = ({ title, subTitles, idx }: discussedTopicProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && (
        <Hover>
          <div className="text">{title}</div>
          <div className="sub_text">
            {subTitles.map((subTitle, idx) => (
              <div
                className="sub_item"
                key={idx}
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
      )}
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