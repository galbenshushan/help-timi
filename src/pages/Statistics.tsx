import React from "react";
import styled from "styled-components";
import useStatistics from "../hooks/useStatistics";
import Legend from "../components/Chart/Legend";
import YAxe from "../components/Chart/YAxe";
import ChartBar from "../components/Chart/ChartBar";
import { observer } from "mobx-react-lite";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

const ChartWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-around;
  width: 800px;
  height: 500px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
`;

const Chart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
`;

const Statistics: React.FC = observer(() => {
  const { attributes, attributeCounts, colors, maxCount, scaleFactor } =
    useStatistics();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jelly Beans Attribute Statistics</h1>
      <ChartContainer>
        <ChartWrapper>
          <YAxe maxCount={maxCount} />
          <Chart>
            {attributeCounts.map((count, index) => (
              <ChartBar
                key={attributes[index]}
                height={count * scaleFactor}
                color={colors[index]}
                attribute={attributes[index]}
                count={count}
              />
            ))}
          </Chart>
        </ChartWrapper>
        <LegendContainer>
          {attributes.map((attr, index) => (
            <Legend key={attr} color={colors[index]} attr={attr} />
          ))}
        </LegendContainer>
      </ChartContainer>
    </div>
  );
});

export default Statistics;
