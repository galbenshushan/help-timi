import React from "react";
import styled from "styled-components";

interface YAxeProps {
  maxCount: number;
}
const YAxisLabels = styled.div`
  position: absolute;
  left: -25px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const YAxisLabel = styled.div`
  font-size: 12px;
`;

const YAxe: React.FC<YAxeProps> = ({ maxCount }) => {
  const yLabels = Array.from({ length: 6 }, (_, i) =>
    Math.round((maxCount / 5) * i)
  );
  return (
    <YAxisLabels>
      {yLabels.reverse().map((label, index) => (
        <YAxisLabel key={index}>{label}</YAxisLabel>
      ))}
    </YAxisLabels>
  );
};

export default YAxe;
