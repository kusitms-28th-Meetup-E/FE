import { KeywordTag, TopicTag } from "@/components/atoms/tag";

import { CommunityMainContainer } from "./style";

export const CommunityMain = () => {
  return (
    <CommunityMainContainer>
      <div className="top-wrapper">
        <div className="content-category">
          <TopicTag category="환경" />
          <KeywordTag category="환경" />
          <KeywordTag category="환경" />
        </div>
        <div className="content-text">
          일기란 개인이 일상에서 체험하는 경험, 생각, 감상 등의 제반사항을 하루 단위로 기록하는
          비공식적, 사적 기록이다. 보통 일일 단위로 기록하지만, 작성하는 개인에 따라 천차만별이며,
          강제성이 있는 개인이 일상에서 체험하는 경험, 생각, 감상 등의 제반사항을 하루 단위로
          기록하는 비공식적, 사적 기록이다. 보통 일일 단위로 기...적 기록이다. 보통 일일 단위로
          기...적 기록이다. 보통 일일 단위로 기 기록이다. 보통 일일 단위로 기록하지만, 작성하는
          개인에 따라 천차만별이며, 강제성이 있는 개인이 일상에서 체험하는 경험, 생각, 감상 등의
          제반사항을 하루 단위로 기록하는 비공식적
        </div>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>서이초 사건'에 분노한 교사들…광화문 메운 '검은 물결' | 서울신문</div>
        </div>
        <img
          src="https://images.chosun.com/resizer/XKL6ePOdAuAn81yF-ZBOY8VyQWs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/JMI3RCEB2Y7QSIUWJKT2MT7CC4.jpg"
          alt=""
        />
      </div>
      <div className="content-button">
        여기도 develop머지후 수정할 예정
        <br />
        sssss
      </div>
    </CommunityMainContainer>
  );
};
