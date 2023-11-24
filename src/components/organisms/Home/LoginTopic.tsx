import { useEffect, useState } from "react";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line import/order

import { getIssueMainfirst, mySubscribe } from "@/apis";
import { Title } from "@/components/atoms/title";
// import { TopicCarousel } from "@/components/molecules/carousel/TopicCarousel";
import { TopicCarousel } from "@/components/molecules/carousel/TopicCarousel";
import { CategoryFilter } from "@/components/molecules/categoryFilter";

// import { MySubscribeData } from "@/dummy/MySubscribeData";

export const LoginTopic = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subscirbeData, setSubscirbeData] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCate, setSelectedCate] = useState<any[]>([]);

  useEffect(() => {
    console.log(selectedCategory);
    mySubscribe().then((res) => {
      console.log(res.data.data);
      const uniqueIssues = [...new Set(res.data.data.map((item: { issue: string }) => item.issue))];
      console.log(uniqueIssues);
      setSelectedCategory(res.data.data[0].issue);
      setSelectedCate(uniqueIssues);
      getIssueMainfirst(selectedCategory).then((res) => {
        console.log(res.data.data);
        setSubscirbeData(res.data.data);
      });
    });
    //selectedCategory -> 이거 여기서 데이터값 보내서 바꾸기 아래 캐러셀로 넘어가는거
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (selectedCategory !== "") {
      getIssueMainfirst(selectedCategory).then((res) => {
        console.log(res.data.data);
        setSubscirbeData(res.data.data);
      });
    }
    //selectedCategory -> 이거 여기서 데이터값 보내서 바꾸기 아래 캐러셀로 넘어가는거
  }, [selectedCategory]);
  return (
    <>
      {subscirbeData.length && (
        <Background>
          <div className="inner">
            <Title title="나의 관심 이슈" />
          </div>
          <div className="inner">
            {subscirbeData.length && (
              <CategoryFilter
                selectedCate={selectedCate}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            )}
          </div>
          <TopicCarousel data={subscirbeData} />
          <div className="inner">
            {/* <SeeMore
          text="관심 콘텐츠 더보기"
          path="/login"
        /> */}
          </div>
        </Background>
      )}
    </>
  );
};

const Background = styled.div`
  background: var(--Gray2_100);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0px;

  .inner {
    width: 1080px;
    margin: 0 auto;

    @media (max-width: 1080px) {
      display: flex;
      width: 770px;
      justify-content: center;
    }
    @media (max-width: 880px) {
      width: 600px;
    }
    @media (max-width: 564px) {
      width: 300px;
    }
  }
`;
