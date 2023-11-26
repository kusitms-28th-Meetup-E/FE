import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { getCommunityTop5, getSearch, getSearchCommunity, getSubscribeTop5 } from "@/apis";
import SearchCategory from "@/components/molecules/searchCategory";
import SearchTitle from "@/components/molecules/searchTitle";
import { CommunityMainList } from "@/components/organisms/Community/CommunityMainList";
import CommunityPopular from "@/components/organisms/Community/CommunityPopular";
import CommunityTopTopic from "@/components/organisms/Community/CommunityTopTopic";
import SearchNotFound from "@/components/organisms/Search/SearchNotFound";
import SearchTopicList from "@/components/organisms/Search/SearchTopicList";
import { searchResultState } from "@/recoil/atoms";
import { PopularCommunityProps, ToptopicProps } from "@/types";

const SearchPage = () => {
  const [query] = useSearchParams();
  const [searchCategoryBtn, setSearchCategoryBtn] = useState<string>("사회 이슈 주제");
  const [notfound, setNotfound] = useState<boolean>(false);
  const [searchTopicData, setSearchTopicData] = useState([]);
  const [count, setCount] = useState(0);
  const [searchCommunityData, setSearchCommunityData] = useState([]);
  const [countCommunity, setCountCommunity] = useState(0);

  const search = useRecoilValue(searchResultState);

  //
  const [topData, setTopData] = useState<ToptopicProps[]>([]);
  const [popularData, setPopularData] = useState<PopularCommunityProps[]>([]);

  useEffect(() => {
    const searchquery = query.get("q") || "";
    console.log(searchquery);
    getSearch(searchquery)
      .then((res) => {
        if (res.data.data.issueResList.length === 0) {
          setNotfound(true);
        } else {
          setCount(res.data.data.searchCount);
          setSearchTopicData(res.data.data.issueResList);
          setNotfound(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotfound(true);
      });
    getSearchCommunity(searchquery)
      .then((res) => {
        if (res.data.data.communityResList.length === 0) {
          setNotfound(true);
        } else {
          setCountCommunity(res.data.data.searchCount);
          setSearchCommunityData(res.data.data.communityResList);
          console.log(res.data.data);
          setNotfound(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotfound(true);
      });

    //
    getSubscribeTop5()
      .then((res) => {
        console.log("top5:", res.data);
        setTopData(res.data.data);
      })
      .catch((err) => {
        // setTopData(ToptopicData);
        console.log(err);
      });

    getCommunityTop5()
      .then((res) => {
        console.log("top55:", res.data);
        setPopularData(res.data.data.slice(0, 5));
      })
      .catch((err) => console.log(err));
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
            <div className="toptopic">
              <CommunityPopular data={popularData} />
            </div>
          </Bottom>
        ) : (
          <Bottom>
            <SearchTopicList data={searchTopicData} />
            <div className="toptopic">
              <CommunityTopTopic data={topData} />
            </div>
          </Bottom>
        )}
      </BottomContainer>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  width: 100%;
  /* width: 1080px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 152px;
  justify-content: space-between; */
`;
const Bottom = styled.div`
  @media (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  margin: 0 auto;
  display: flex;
  padding-bottom: 152px;
  justify-content: space-between;
  .toptopic {
    @media (max-width: 1150px) {
      display: none;
    }
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: var(--Gray3_200, #eee);
`;
