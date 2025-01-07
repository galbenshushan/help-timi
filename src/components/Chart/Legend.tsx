import React from "react";
import styled from "styled-components";

interface LegendProps {
  attr: string;
  color: string;
}

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

const Legend: React.FC<LegendProps> = ({ attr, color }) => {
  return (
    <LegendItem key={attr}>
      <LegendColor color={color} />
      <LegendText>{attr}</LegendText>
    </LegendItem>
  );
};

export default Legend;
