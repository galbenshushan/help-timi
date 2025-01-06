import React from "react";
import styled from "styled-components";
import { jellyBeansStore } from "../store";
import { Bean } from "../types/JellyBeans";
import { BeanAttribute } from "../enums/beans";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ChartWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-around;
  width: 600px;
  height: 300px;
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

const YAxisLabels = styled.div`
  position: absolute;
  left: -40px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const YAxisLabel = styled.div`
  font-size: 12px;
`;

const Bar = styled.div<{ height: number; color: string }>`
  width: 80px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 10px;
  transition: height 0.3s ease-in-out;
`;

const BarLabel = styled.div`
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

const XAxisLabel = styled.div`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 600px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
  border: 1px solid black;
`;

const LegendText = styled.div`
  font-size: 14px;
`;

const Statistics: React.FC = () => {
  const jellyBeans = jellyBeansStore.beans;
  const attributes = Object.values(BeanAttribute);
  const attributeCounts = attributes.map((attr) =>
    jellyBeans.reduce(
      (count, bean: Bean) => (bean[attr] ? count + 1 : count),
      0
    )
  );

  const colors = ["#FF6F61", "#FFD700", "#32CD32", "#6A5ACD"];

  const maxCount = Math.max(...attributeCounts);
  const maxHeight = 250;
  const scaleFactor = maxHeight / maxCount;

  const yLabels = Array.from({ length: 6 }, (_, i) =>
    Math.round((maxCount / 5) * i)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jelly Beans Attribute Statistics</h1>
      <ChartContainer>
        <ChartWrapper>
          <YAxisLabels>
            {yLabels.reverse().map((label, index) => (
              <YAxisLabel key={index}>{label}</YAxisLabel>
            ))}
          </YAxisLabels>
          <Chart>
            {attributeCounts.map((count, index) => (
              <div key={attributes[index]}>
                <Bar height={count * scaleFactor} color={colors[index]} />
                <div>
                  <BarLabel>{attributes[index]}</BarLabel>
                  <XAxisLabel>{count}</XAxisLabel>
                </div>
              </div>
            ))}
          </Chart>
        </ChartWrapper>
        <Legend>
          {attributes.map((attr, index) => (
            <LegendItem key={attr}>
              <LegendColor color={colors[index]} />
              <LegendText>{attr}</LegendText>
            </LegendItem>
          ))}
        </Legend>
      </ChartContainer>
    </div>
  );
};

export default Statistics;
