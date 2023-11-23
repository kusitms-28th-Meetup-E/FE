import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { BigProfile } from "@/components/atoms/profile";
import { MainCommunityBox } from "@/components/molecules/mainCommunityBox";
// import { envirData } from "@/dummy/AreaData";
import { myLikeData, myWriteData, selectedTabState } from "@/recoil/atoms";

export const MyPost = () => {
  const myLike = useRecoilValue(myLikeData);
  // console.log("s", myLike);
  const myWrite = useRecoilValue(myWriteData);

  const selectedTab = useRecoilValue(selectedTabState);

  let data: (typeof myWrite)[number][] | (typeof myLike)[number][] = [];

  if (selectedTab === 0) {
    data = myWrite;
    console.log(data);
  } else if (selectedTab === 2) {
    data = myLike;
  }

  console.log("데이터:", data);

  return (
    <Container>
      {data.map((item, idx) => (
        <MyPostWrapper key={idx}>
          <BigProfile
            nickname={item.nickname}
            date={item.date}
            profileImg={item.profileImg}
          />
          <MainCommunityBox
            key={idx}
            data={item}
          />
        </MyPostWrapper>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MyPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;
