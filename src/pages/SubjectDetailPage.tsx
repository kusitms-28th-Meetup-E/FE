import { CommunityMainList } from "@/components/organisms/SubjectDetail/CommunityMainList";
import { CommunityPreview } from "@/components/organisms/SubjectDetail/CommunityPreview";

export const SubjectDetailPage = () => {
  return (
    <>
      <CommunityPreview />
      <br />
      <CommunityMainList />
    </>
  );
};
