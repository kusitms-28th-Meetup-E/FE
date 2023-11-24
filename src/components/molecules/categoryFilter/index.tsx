/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";

// import { useRecoilState } from "recoil";

// import { mySubscribe } from "@/apis";
import { CategoryButton } from "@/components/atoms/button";
//import { mySubjectData } from "@/dummy/mySubjectData";
// import { selectedCategoryState } from "@/recoil/atoms";

import { CategoryFilterContainer } from "./style";

export const CategoryFilter = ({
  selectedCate,
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCate: Array<any>;
  selectedCategory: string;
  setSelectedCategory: (tag: string) => void;
}) => {
  // const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
  // const [selectedCate, setSelectedCate] = useState<any[]>([]);

  const onClickCategory = (tag: string) => {
    setSelectedCategory(tag);
  };

  // useEffect(() => {
  //   mySubscribe().then((res) => {
  //     console.log(res.data.data);
  //     const uniqueIssues = [...new Set(res.data.data.map((item: { issue: string }) => item.issue))];
  //     console.log(uniqueIssues);
  //     setSelectedCategory(res.data.data[0].issue);
  //     setSelectedCate(uniqueIssues);
  //   });
  //   //setSelectedCate(res.data.data);
  // }, [setSelectedCategory, setSelectedCate]);
  // 마이페이지에서 넘어오는 데이터값 구독한 주제 넣기
  return (
    <CategoryFilterContainer>
      {selectedCate?.map((tag, idx) => {
        const isSelected = selectedCategory === tag;
        return (
          <>
            {" "}
            <CategoryButton
              key={idx}
              onClick={() => onClickCategory(tag)}
              isSelected={isSelected}
            >
              {tag}
            </CategoryButton>
          </>
        );
      })}
    </CategoryFilterContainer>
  );
};
