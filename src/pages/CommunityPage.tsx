import { useState } from "react";

import { CategoryBar } from "@/components/molecules/categoryBar";
import { DetailCommunityBox } from "@/components/molecules/detailCommunityBox";
import { CommunityMainList } from "@/components/organisms/SubjectDetail/CommunityMainList";
import { envirData } from "@/dummy/AreaData";

export const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
  };

  return (
    <>
      <CategoryBar onSelectTab={handleTabChange} />
      <CommunityMainList selectedTab={selectedTab} />
      <br />
      {envirData.map((item, idx) => (
        <DetailCommunityBox
          key={idx}
          data={item}
        />
      ))}
    </>
  );
};
