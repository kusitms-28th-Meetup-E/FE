import { useEffect, useMemo, useState } from "react";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme3.css";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getDetailLineGraph } from "@/apis";
import { areaState, topDateState } from "@/recoil/atoms";
import { lineGraphProps } from "@/types";

const Line = ({ showGraph }: { showGraph: boolean }) => {
  const area = useRecoilValue(areaState);
  const setTopDate = useSetRecoilState(topDateState);
  const [data, setData] = useState<lineGraphProps[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const name = decodeURI(decodeURIComponent(id || ""));

    getDetailLineGraph(name)
      .then((res) => {
        const obj = Object.freeze(res.data.data.data);
        console.log(res);
        setTopDate(res.data.data.date);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const RealObj = obj.map((item: any) => {
          return Object.freeze(item);
        });
        setData(RealObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const options = useMemo(() => {
    return {
      chart: {
        type: "line",
        plotBorderWidth: 0,
        height: 246,
        width: 887,
        marginLeft: 0,
        marginRight: 0,
      },

      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat:
          "<span class='tooltip-point-custom'><span class='tooltip-dot-custom'>\u25CF</span> 검색횟수: <b>{point.y}</b></span><br/>",
        useHTML: true,
        style: {
          fontSize: "1em",
          color: "#fff",
        },
      },
      exporting: {
        enabled: false,
      },

      series: [
        {
          name: "검색횟수",
          data: data,
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }, [data]);
  return (
    <Container
      $showGraph={showGraph}
      $area={area}
    >
      {data.length && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      )}
    </Container>
  );
};

export default Line;

const Container = styled.div<{ $showGraph: boolean; $area: string }>`
  display: flex;
  justify-content: center;
  //height: ${(props) => (!props.$showGraph ? "0" : "300px")};
  /* visibility: ${(props) => (!props.$showGraph ? "hidden" : "visible")}; */
  transform: ${(props) => (!props.$showGraph ? "translateY(-300px)" : "translateY(0)")};
  opacity: ${(props) => (!props.$showGraph ? "0" : "1")};
  z-index: ${(props) => (!props.$showGraph ? "-99" : "1")};
  /* transition: visibility 0.3s; */
  /* transition: transform 1s; */
  transition-duration: 0.7s;
  /* transition: opacity 0.7s; */

  .tooltip-dot-custom {
    color: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(255, 153, 0, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(0, 132, 255, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-line-series .highcharts-halo {
    fill: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(255, 153, 0, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(0, 132, 255, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-tracker-line {
    stroke: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(255, 153, 0, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(0, 132, 255, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-line-series .highcharts-point {
    fill: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(255, 153, 0, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(0, 132, 255, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
    stroke: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(255, 153, 0, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(0, 132, 255, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
`;
