// import { useEffect, useState } from "react";

import styled from "styled-components";

// import { getCommunityAllData } from "@/apis";
import { BigProfile } from "@/components/atoms/profile";
import { MainCommunityBox } from "@/components/molecules/mainCommunityBox";
// import { CommunityMain } from "@/components/molecules/communityMain";
import { CommunityItemProps } from "@/types";

export const CommunityMainList = ({ data }: { data: CommunityItemProps[] }) => {
  // const [tabData, setTabData] = useState<CommunityItemProps[]>([]);

  // useEffect(() => {
  //   let dataFetch: CommunityItemProps[] = [];

  //   switch (selectedTab) {
  //     case 0: // 전체 api 갖고와서 데이터 넣어주기
  //       // getCommunityAllData()
  //       //   .then((res) => {
  //       //     console.log(res.data);
  //       //     dataFetch = res.data;
  //       //   })
  //       //   .catch((err) => console.log(err));
  //       dataFetch = envirData;

  //       break;
  //     case 1: // 일자리 · 노동
  //       dataFetch = envirData; //일단 환경 더미 데이터만 넣어놨음
  //       break;
  //     case 2: // 주거 · 사회 안전망
  //       dataFetch = envirData;
  //       break;
  //     case 3: // 환경
  //       dataFetch = envirData;
  //       break;
  //     case 4: // 교육
  //       dataFetch = EduData;
  //       break;
  //     default:
  //       break;
  //   }

  //   setTabData(dataFetch);
  // }, [selectedTab]);

  return (
    <FirstWrapper>
      {data.map((item, idx) => {
        return (
          <CommunityMainListContainer key={idx}>
            <BigProfile
              nickname={item.nickname}
              date={item.date}
              profileImg={item.profileImg}
            />
            <MainCommunityBox data={item} />
          </CommunityMainListContainer>
        );
      })}
    </FirstWrapper>
  );
};

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* width: 690px; */
  //width: 63.8%; // 690/1080 비율
  padding-top: 30px;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const CommunityMainListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
