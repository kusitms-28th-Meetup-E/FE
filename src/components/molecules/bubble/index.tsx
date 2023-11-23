/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getDetailBubbleGraph } from "@/apis";
import backgroundImg from "@/assets/Bubble/detail-bubbleBackground.svg";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme2.css";
//import { bubbleDummydata } from "@/dummy/bubbleData";
import { bubbleDummydata } from "@/dummy/bubbleData";
import { areaState, detailPageKeyword } from "@/recoil/atoms";
import { BubbleGraphProps } from "@/types";

const Bubble = () => {
  const [area, setArea] = useRecoilState<string>(areaState);
  const [bubbleGraphData, setBubbleGraphData] = useState<BubbleGraphProps[]>([]);
  const setDetailPageKeyword = useSetRecoilState(detailPageKeyword);
  const options = useMemo(() => {
    return {
      chart: {
        type: "bubble",
        plotBorderWidth: 0,
        height: 500,
        width: 1080,
        marginLeft: 0,
        marginRight: 0,
        plotBackgroundImage: backgroundImg,
      },

      legend: {
        enabled: false,
      },

      tooltip: {
        useHTML: true,
        headerFormat: "<table>",
        pointFormat:
          // '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
          "<tr><th><h5>키워드 도출 횟수 :&nbsp</h5></th><td><h5> {point.z}회</h5></td></tr>",
        footerFormat: "</table>",
        followPointer: true,
        style: {
          color: "#000",
          fontSize: "0.8rem",
        },
      },
      exporting: {
        enabled: false,
      },
      plotOptions: {
        bubble: {
          minSize: 3,
          maxSize: 180,
          zMin: 0,
          zMax: 200,
          color: "#212121",
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: {
              color: "#FFF",
              textOutline: "none",
              fontWeight: "normal",
              fontFamily: "Pretendard",
              fontSize: 18,
              transition: "opacity .1ms",
            },
          },
          events: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            click: function (e: any) {
              console.log(e.point.name);
              setDetailPageKeyword(e.point.name);
              //1부터 9까지 숫자가 들어오면 거기에 맞춰서 라우팅 하는게 맞을듯
              //setWidth(width - 100); // 반응형 할 때, 사용 임시
            },
          },
        },
      },

      series: [
        {
          data: bubbleGraphData,
          colorByPoint: true,
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }, [bubbleGraphData, setDetailPageKeyword]);
  const { id } = useParams();

  useEffect(() => {
    const name = decodeURI(decodeURIComponent(id || ""));
    if (name === "후쿠시마 오염수" || name === "일회용품  사용 규제 시행") {
      setArea("환경");
    } else if (
      name === "주 69시간 근로시간 제도 개편" ||
      name === "쿠팡 노동자 사망" ||
      name === "SPC 불매 운동"
    ) {
      setArea("일자리·노동");
    } else if (name === "국민연금 개혁" || name === "이태원 참사") {
      setArea("주거·사회 안전망");
    } else if (name === "의대 정원 확대" || name === "서이초 교사 사건") {
      setArea("교육");
    }
  }, [area, id, setArea]);

  useEffect(() => {
    const name = decodeURI(decodeURIComponent(id || ""));
    getDetailBubbleGraph(name)
      .then((res) => {
        const obj = [...res.data.data];
        const RealObj = obj.map((item: any) => {
          return Object.freeze(item);
        });
        setBubbleGraphData(RealObj);
      })
      .catch((err) => {
        console.log(err);
        setBubbleGraphData(bubbleDummydata);
      });
  }, [id]);

  return (
    <Container $area={area}>
      {bubbleGraphData.length && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      )}
    </Container>
  );
};

export default Bubble;

const Container = styled.div<{ $area: string }>`
  .highcharts-bubble-series .highcharts-point {
    fill-opacity: 0.8 !important;
    fill: #212121 !important;
    filter: ${(props) =>
      props.$area === "환경"
        ? "drop-shadow(0px 6px 30px rgba(26, 226, 118, 0.4)) !important;"
        : props.$area === "일자리·노동"
        ? "drop-shadow(0px 6px 30px rgba(0, 132, 255, 0.4)) !important;"
        : props.$area === "교육"
        ? "drop-shadow(0px 6px 30px rgba(255, 153, 0, 0.4)) !important;"
        : props.$area === "주거·사회 안전망"
        ? "drop-shadow(0px 6px 30px rgba(119, 85, 255, 0.4)) !important;"
        : ""};
  }
  .highcharts-color-0,
  .highcharts-color-1,
  .highcharts-color-2,
  .highcharts-color-3,
  .highcharts-color-4,
  .highcharts-color-5,
  .highcharts-color-6,
  .highcharts-color-7,
  .highcharts-color-8,
  .highcharts-color-9 {
    fill: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 0.8) !important;"
        : props.$area === "일자리·노동"
        ? "rgba(0, 132, 255, 0.8) !important;"
        : props.$area === "교육"
        ? " rgba(255, 153, 0, 0.8) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 0.8) !important;"
        : ""};
  }
  /* fill: rgba(26, 226, 118, 0.8) !important; */
  /* stroke: var(—highcharts-color-2) !important; */

  /* 
  filter: drop-shadow(0px 6px 30px rgba(255, 153, 0, 0.30)); 교육
  filter: drop-shadow(0px 6px 30px rgba(0, 132, 255, 0.30)); 일자리노동
  filter: drop-shadow(0px 6px 30px rgba(119, 85, 255, 0.30));  주거 사회안전망
   */
`;
