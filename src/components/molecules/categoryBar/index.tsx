import { useState } from "react";

import { CategoryBarProps } from "@/types";

import { CategoryBarContainer } from "./style";

export const CategoryBar = ({ onSelectTab }: CategoryBarProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const areaList = [
    { name: "전체" },
    { name: "일자리 · 노동", color: "var(--Main_Blue)" },
    { name: "주거 · 사회 안전망", color: "var(--Sub_Purple)" },
    { name: "환경", color: "var(--Main_NeonGreen)" },
    { name: "교육", color: "var(--Sub_Orange)" },
  ];

  const selectTab = (idx: number) => {
    setCurrentTab(idx);
    onSelectTab(idx);
  };

  return (
    <CategoryBarContainer>
      {areaList.map((el, idx) => {
        return (
          <div className="area-wrapper">
            <div
              className={idx === currentTab ? "tab-focused" : "tab"}
              key={idx}
              onClick={() => selectTab(idx)}
            >
              {el.name !== "전체" && (
                <div
                  className="circle"
                  style={{ backgroundColor: el.color }}
                ></div>
              )}
              <p>{el.name}</p>
            </div>
            <div className={idx === currentTab ? "focus-bottom" : "not-focused"}></div>
          </div>
        );
      })}
    </CategoryBarContainer>
  );
};
