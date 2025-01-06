import React from "react";
import styled from "styled-components";

const ColorBox = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border: 2px solid black;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, ${({ color }) => color}, #f0f0f0);
`;

const ColorCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const ColorContainer = ({ color = "#FFFFFF" }) => {
  return (
    <ColorCell>
      <ColorBox color={color} />
      {color}
    </ColorCell>
  );
};

export default ColorContainer;
