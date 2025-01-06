import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FitnessCenter, LocalBar } from "@mui/icons-material";
import { TbJewishStar, TbBreadOff } from "react-icons/tb";
import styled from "styled-components";
import { BeanAttribute } from "../../enums/beans";

const NonClickableIconButton = styled(IconButton)`
  cursor: default;
`;

interface IconRendererProps {
  type: BeanAttribute;
  isActive: boolean;
  tooltip: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({
  type,
  isActive,
  tooltip,
}) => {
  const getIcon = () => {
    switch (type) {
      case BeanAttribute.GLUTEN_FREE:
        return <TbBreadOff />;
      case BeanAttribute.SUGAR_FREE:
        return <FitnessCenter />;
      case BeanAttribute.SEASONAL:
        return <LocalBar />;
      case BeanAttribute.KOSHER:
        return <TbJewishStar size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Tooltip title={tooltip}>
        <NonClickableIconButton color={isActive ? "primary" : "default"}>
          {getIcon()}
        </NonClickableIconButton>
      </Tooltip>
    </>
  );
};

export default IconRenderer;
