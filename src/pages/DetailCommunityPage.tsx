import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { getCommunityDetailData } from "@/apis";
import { CommentList } from "@/components/organisms/DetailCommunity/CommentList";
import DetailCommunityTitle from "@/components/organisms/DetailCommunity/DetailCommunityTitle";
import { CommunityItemProps } from "@/types";

const DetailCommunityPage = () => {
  const { topicId } = useParams();
  const { communityId } = useParams();

  const [detailData, setDetailData] = useState<CommunityItemProps | null>(null);

  useEffect(() => {
    getCommunityDetailData(parseInt(topicId || "0"), parseInt(communityId || "0"))
      .then((res) => {
        setDetailData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [communityId, topicId]);

  return (
    <>
      {detailData && (
        <>
          <DetailCommunityTitle data={detailData} />
          <CommentList />
        </>
      )}
    </>
  );
};

export default DetailCommunityPage;
