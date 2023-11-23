import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { getSearch, getSearchCommunity } from "@/apis";
import SearchCategory from "@/components/molecules/searchCategory";
import SearchTitle from "@/components/molecules/searchTitle";
import { CommunityMainList } from "@/components/organisms/Community/CommunityMainList";
import CommunityPopular from "@/components/organisms/Community/CommunityPopular";
import CommunityTopTopic from "@/components/organisms/Community/CommunityTopTopic";
import SearchNotFound from "@/components/organisms/Search/SearchNotFound";
import SearchTopicList from "@/components/organisms/Search/SearchTopicList";
import { PopularCommunityData } from "@/dummy/PopularCommunityData";
//import { SearchData } from "@/dummy/SearchData";
// import { SearchTopicData } from "@/dummy/SearchTopicData";
import { ToptopicData } from "@/dummy/ToptopicData";
import { searchResultState } from "@/recoil/atoms";

const SearchPage = () => {
  const [query] = useSearchParams();
  const [searchCategoryBtn, setSearchCategoryBtn] = useState<string>("사회 이슈 주제");
  const [notfound, setNotfound] = useState<boolean>(false);
  const [searchTopicData, setSearchTopicData] = useState([]);
  const [count, setCount] = useState(0);
  const [searchCommunityData, setSearchCommunityData] = useState([]);
  const [countCommunity, setCountCommunity] = useState(0);

  const search = useRecoilValue(searchResultState);

  useEffect(() => {
    const searchquery = query.get("q") || "";
    console.log(searchquery);
    getSearch(searchquery)
      .then((res) => {
        setCount(res.data.data.searchCount);
        setSearchTopicData(res.data.data.issueResList);
        setNotfound(false);
      })
      .catch((err) => {
        console.log(err);
        setNotfound(true);
      });
    getSearchCommunity(searchquery)
      .then((res) => {
        setCountCommunity(res.data.data.searchCount);
        setSearchCommunityData(res.data.data.communityResList);
        console.log(res.data.data);
        setNotfound(false);
      })
      .catch((err) => {
        console.log(err);
        setNotfound(true);
      });
  }, [query]);
  return (
    <Container>
      <SearchCategory
        searchCategoryBtn={searchCategoryBtn}
        setSearchCategoryBtn={setSearchCategoryBtn}
      />
      <SearchTitle
        search={search}
        searchCategoryBtn={searchCategoryBtn}
        searchCount={notfound ? 0 : searchCategoryBtn === "커뮤니티" ? countCommunity : count}
      />
      <BottomContainer>
        {notfound ? (
          <Bottom>
            <SearchNotFound />
          </Bottom>
        ) : searchCategoryBtn === "커뮤니티" ? (
          <Bottom>
            <CommunityMainList data={searchCommunityData} />
            <CommunityPopular data={PopularCommunityData} />
          </Bottom>
        ) : (
          <Bottom>
            <SearchTopicList data={searchTopicData} />
            <CommunityTopTopic data={ToptopicData} />
          </Bottom>
        )}
      </BottomContainer>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  /* width: 1080px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 152px;
  justify-content: space-between; */
`;

const Bottom = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 152px;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: var(--Gray3_200, #eee);
`;
