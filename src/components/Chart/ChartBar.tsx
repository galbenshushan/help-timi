import React from "react";
import styled from "styled-components";

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

interface ChartBarProps {
  height: number;
  color: string;
  attribute: string;
  count: number;
}

const ChartBar: React.FC<ChartBarProps> = ({
  height,
  color,
  attribute,
  count,
}) => {
  return (
    <div>
      <Bar height={height} color={color} />
      <div>
        <BarLabel>{attribute}</BarLabel>
        <XAxisLabel>{count}</XAxisLabel>
      </div>
    </div>
  );
};

export default ChartBar;
