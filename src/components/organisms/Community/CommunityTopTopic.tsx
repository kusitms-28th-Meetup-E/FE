import { useEffect, useState } from "react";

import styled from "styled-components";

import { Top5TopicBox } from "@/components/molecules/longTopicBox";
import { ToptopicProps } from "@/types";

const CommunityTopTopic = ({ data }: { data: ToptopicProps[] }) => {
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (document.location.href.split("/")[3] === "search") {
      setLink("search");
    }
  }, []);
  return (
    <TopicWraaper $link={link}>
      <div className="title">
        <p className="first">인기 있는 사회 이슈 top5</p>
        <p className="second">광장에서 가장 인기 있는 사회 이슈에요.</p>
      </div>
      <div className="TopicBoxes">
        {data.map((item, idx) => {
          return (
            <div className="box">
              <p>{idx + 1}위</p>
              <Top5TopicBox data={item} />
            </div>
          );
        })}
      </div>
    </TopicWraaper>
  );
};

export default CommunityTopTopic;

const TopicWraaper = styled.div<{ $link: string }>`
  height: fit-content;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--Gray1_50, #fafafa);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px;
  margin-top: ${(props) => (props.$link === "search" ? "50px" : "")};

  border-radius: 5px;

  @media (max-width: 1150px) {
    height: 378px;
    margin-top: 30px;
  }

  @media (max-width: 800px) {
    margin: 20px 0px 30px 0px;
  }

  .title {
    margin-bottom: 22px;
  }

  .title .first {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h6);
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.3px;
  }
  .title .second {
    color: var(--Gray6_500, #959595);
    font-size: var(--text_b3);
    line-height: 27px;
    letter-spacing: -0.21px;
  }
  .TopicBoxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    p {
      color: var(--Gray9_800, #424242);
      text-align: center;
      font-size: var(--text_b3);
      line-height: 18px;
    }
  }
`;
