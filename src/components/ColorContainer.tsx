import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { jellyBeansStore } from "../store";

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
  const [colorDescription, setColorDescription] = useState<string>(color);

  const getColor = async () => {
    const displayColor = await jellyBeansStore.fetchColor(color);
    setColorDescription(displayColor.colorDescription);
  };

  useEffect(() => {
    getColor();
  }, []);

  return (
    <Tooltip title={colorDescription}>
      <ColorCell>
        {showTitle && "color:"}
        <ColorBox color={color} />
      </ColorCell>
    </Tooltip>
  );
};

export default ColorContainer;
