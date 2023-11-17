import { useEffect, useState } from "react";

import styled from "styled-components";

// import { getCommunityAllData } from "@/apis";
import { BigProfile } from "@/components/atoms/profile";
import { CommunityMain } from "@/components/molecules/communityMain";
// import { CommunityMain } from "@/components/molecules/communityMain";
import { EduData, envirData } from "@/dummy/AreaData";
import { CommunityItemProps } from "@/types";

export const CommunityMainList = ({ selectedTab }: { selectedTab: number }) => {
  const [tabData, setTabData] = useState<CommunityItemProps[]>([]);

  useEffect(() => {
    let dataFetch: CommunityItemProps[] = [];

    switch (selectedTab) {
      case 0: // 전체 api 갖고와서 데이터 넣어주기
        // getCommunityAllData()
        //   .then((res) => {
        //     console.log(res.data);
        //     dataFetch = res.data;
        //   })
        //   .catch((err) => console.log(err));
        dataFetch = envirData;

        break;
      case 1: // 일자리 · 노동
        dataFetch = envirData; //일단 환경 더미 데이터만 넣어놨음
        break;
      case 2: // 주거 · 사회 안전망
        dataFetch = envirData;
        break;
      case 3: // 환경
        dataFetch = envirData;
        break;
      case 4: // 교육
        dataFetch = EduData;
        break;
      default:
        break;
    }

    setTabData(dataFetch);
  }, [selectedTab]);

  return (
    <FirstWrapper>
      {tabData.map((item, idx) => {
        return (
          <CommunityMainListContainer key={idx}>
            <BigProfile
              nickname={item.nickname}
              date={item.date}
              profileImg={item.profileImg}
            />
            <CommunityMain data={item} />
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
  background-color: #eee;
  /* width: 690px; */
  width: 63.8%; // 690/1080 비율
  margin: 0 auto;
`;

export const CommunityMainListContainer = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
