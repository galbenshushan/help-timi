import { Tooltip } from "@mui/material";
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
  width: fit-content;
`;

interface ColorContainerProps {
  color?: string;
  showTitle?: boolean;
}

const ColorContainer: React.FC<ColorContainerProps> = ({
  color = "#FFFFFF",
  showTitle = false,
}) => {
  return (
    <Tooltip title={color}>
      <ColorCell>
        {showTitle && "color:"}
        <ColorBox color={color} />
      </ColorCell>
    </Tooltip>
  );
};

export default ColorContainer;
