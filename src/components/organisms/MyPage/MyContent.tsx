import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { MySlideItem } from "@/components/molecules/mySlideItem";
import { myLikeContentsData } from "@/recoil/atoms";

export const MyContent = () => {
  const contentsData = useRecoilValue(myLikeContentsData);

  return (
    <MyContentWrapper>
      {contentsData.map((item, idx) => (
        <MySlideItem
          key={idx}
          data={item}
        />
      ))}
    </MyContentWrapper>
  );
};

export const MyContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 24px;
  width: 712px;

  @media (max-width: 820px) {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
  }
`;
