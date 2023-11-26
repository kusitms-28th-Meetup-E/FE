import styled from "styled-components";

import SearchTopicBox from "@/components/molecules/searchTopicBox";
import { SearchTopicProps } from "@/types";

const SearchTopicList = ({ data }: { data: SearchTopicProps[] }) => {
  return (
    <Container>
      {data?.map((item) => {
        return <SearchTopicBox data={item} />;
      })}
    </Container>
  );
};

export default SearchTopicList;

const Container = styled.div`
  /* width: 100%; */
`;
