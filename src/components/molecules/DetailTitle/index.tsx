import { useEffect, useState } from "react";

import { useSetRecoilState, useRecoilValue } from "recoil";

import { getDeleteSubcribe, getSubcribe, getactiveSubcribe, mySubscribe } from "@/apis";
import { SubscribeButton } from "@/components/atoms/button";
import OneLine from "@/components/atoms/oneLine";
import { TopicTag } from "@/components/atoms/tag";
import { ToastState, areaState, detailTitleState } from "@/recoil/atoms";
import { DetailTitleProps } from "@/types";

import { Container, Top, Title } from "./style";

const DetailTitle = ({ data }: { data: DetailTitleProps }) => {
  const [onOff, setOnOff] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const setOnToast = useSetRecoilState<boolean>(ToastState);
  const detailtitle = useRecoilValue(detailTitleState);
  const setDetailtitle = useSetRecoilState(detailTitleState);
  const area = useRecoilValue(areaState);

  const subscribeOn = () => {
    if (area === "주거·사회 안전망") {
      setNum(2);
    } else if (area === "일자리·노동") {
      setNum(1);
    } else if (area === "환경") {
      setNum(3);
    } else if (area === "교육") {
      setNum(4);
    }

    if (!onOff && localStorage.getItem("accessToken")) {
      mySubscribe().then((res) => {
        if (res.data.data.length !== 3) {
          getSubcribe({ topicId: num, IssueId: detailtitle.id })
            .then((res) => {
              setDetailtitle({ ...detailtitle, count: res?.data?.data?.subscribers });
              setOnOff(true);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("구독 수 3개를 초과하셨습니다.");
        }
      });

      // 구독 Api 발송!
    }
    if (onOff && localStorage.getItem("accessToken")) {
      getDeleteSubcribe({ topicId: num, IssueId: detailtitle.id })
        .then((res) => {
          setDetailtitle({ ...detailtitle, count: res?.data?.data?.subscribers });
          setOnOff(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!localStorage.getItem("accessToken")) {
      setOnToast(true);
      setTimeout(() => {
        setOnToast(false);
      }, 1500);
    }
  };

  useEffect(() => {
    getactiveSubcribe({ topicId: num, IssueId: detailtitle.id })
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setOnOff(false); ///구독할수있는상태
        } else {
          setOnOff(true);
        }

        //setOnOff(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [detailtitle.id, num]);
  return (
    <Container>
      <Top>
        <div className="topic">
          <TopicTag category={data.category} />
          <Title>{data.title}</Title>
        </div>
        <div className="subscribe">
          <div className="subscribeText">
            <p>{data.count}</p>명이 구독하고 있어요
          </div>
          <SubscribeButton
            onOff={onOff}
            onClick={subscribeOn}
          />
        </div>
      </Top>
      <OneLine text={data.oneline} />
    </Container>
  );
};

export default DetailTitle;
