import { useEffect, useState } from "react";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme.css";
import { BubbleChartState } from "@/recoil/atoms";

const PackBubble = () => {
  const BubbleChartData = useRecoilValue(BubbleChartState);
  const [width, setWidth] = useState<number>(window.innerWidth); // 기본 1440-> 반응형 400으로 , 반응형 작업할 때 사용, 아마 강제로 view값 가져와서 거기에 맞게 useEffect로 줄여야할듯
  const navigate = useNavigate();
  const handleResize = () => {
    //뷰크기 강제로 강져오기
    setWidth(window.innerWidth); // 모바일에서는 왜 1080으로 적용이 되는걸까
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //clean
  }, []);

  const options = {
    chart: {
      type: "packedbubble",
      width: width,
      height: 524, //524
      backgroundColor: "transparent",
      zIndex: 9,
    },
    legend: {
      itemStyle: {
        color: "#FAFAFA",
        fontWeight: 600,
        lineHeight: 24,
        fontFamily: "Pretendard",
      }, //legend 폰트 바꾸는 부분
      lineHeight: 24,
      itemHoverStyle: { color: "#9d9a9a" },
      itemDistance: 70,
      padding: -5,
      symbolPadding: 8,
      symbolHeight: 9,
      symbolWidth: 9,
      itemMarginBottom: 10,
      itemMarginTop: 20,
    },
    tooltip: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },

    plotOptions: {
      packedbubble: {
        minSize: "20%",
        maxSize: "230%",
        zMin: 0,
        zMax: 1250,
        layoutAlgorithm: {
          bubblePadding: 10,
          dragBetweenSeries: true,
          enableSimulation: true,
          friction: -1.0,
          maxIterations: 5000,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          click: function (e: any) {
            console.log(e.point.name);
            const name = encodeURI(encodeURIComponent(e.point.name));
            navigate(`/detail/${name}`);
            //1부터 9까지 숫자가 들어오면 거기에 맞춰서 라우팅 하는게 맞을듯
            //setWidth(width - 100); // 반응형 할 때, 사용 임시
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          shadow: true,
          style: {
            textOutline: "none",
            fontWeight: "normal",
            fontFamily: "Pretendard",
            fontSize: 18,
            transition: "opacity .1ms",
          },
        },
        color: "#212121",

        marker: {
          fillOpacity: 0.9,
        },
        draggable: true,
        enableMouseTracking: true,
        states: {
          hover: {
            fillOpacity: 1,
            enabled: false,
            halo: {
              opacity: 0, // 드래그 했을 때, 남는 잔상 없애기
            },
          },
          inactive: {
            // 호버 했을때 다른 요소들
            opacity: 1,
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: BubbleChartData, // 데이터 값
  };
  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default PackBubble;

export const Container = styled.div`
  @media (max-width: 590px) {
    .highcharts-legend-item {
      display: none !important;
    }
    .highcharts-root {
      padding-top: 30px;
    }
  }
  @media (max-width: 400px) {
    .highcharts-root {
      padding-top: 80px;
    }
  }
`;
