import React from "react";
import styled from "styled-components";
import { jellyBeansStore } from "../store";
import { Bean } from "../types/JellyBeans";
import { BeanAttribute } from "../enums/beans";
import { observer } from "mobx-react-lite";
import Legend from "../components/Chart/Legend";
import YAxe from "../components/Chart/YAxe";
import ChartBar from "../components/Chart/ChartBar";

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


const LegendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 600px;
`;

const Statistics: React.FC = observer(() => {
  const jellyBeans = jellyBeansStore.beans;
  
  const attributes = Object.values(BeanAttribute);
  const attributeCounts = attributes.map((attr) =>
    jellyBeans.reduce(
      (count, bean: Bean) => (bean[attr] ? count + 1 : count),
      0
    )
  );

  const colors = ["wheat", "coral", "pink", "crimson"];
  const maxCount = Math.max(...attributeCounts);
  const maxHeight = 250;
  const scaleFactor = maxCount > 0 ? maxHeight / maxCount : 1;

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
