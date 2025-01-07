import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Bean } from "../../types/JellyBeans";
import IconRenderer from "../UI/IconRenderer";
import { IconMapping } from "../../consts/general";
import ColorContainer from "../ColorContainer";

const BeanCardContainer = styled(Box)`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  width: 300px;
  height: 350px;
  margin: 16px;
  padding: 16px;
  display: inline-block;
  text-align: start;
  position: relative;
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px); 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:hover .attributes-wrapper {
    opacity: 1;
  }
`;

const BeanImage = styled("img")`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
`;

const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: contain;
  margin-bottom: 12px;
`;

const AttributesWrapper = styled(Box)`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Description = styled(Typography)`
  margin-bottom: 12px;
  text-align: start;
  color: #fff; 
`;

const BeanCard = ({ bean }: { bean: Bean }) => {
  return (
    <BeanCardContainer key={bean.BeanId}>
      <ImageWrapper>
        <BeanImage src={bean.ImageUrl} alt={bean.FlavorName} />
      </ImageWrapper>
      <Typography variant="h6" fontWeight={"bold"} color="white">
        {bean.FlavorName}
      </Typography>
      <div>
        <ColorContainer color={bean.ColorGroup} showTitle />
      </div>
      <Description variant="body2">{bean.Description}</Description>
      <AttributesWrapper className="attributes-wrapper">
        {Object.values(IconMapping).map((icon) => (
          <IconRenderer
            key={icon.type}
            type={icon.type}
            isActive={bean[icon.type]}
            tooltip={icon.tooltip}
          />
        ))}
      </AttributesWrapper>
    </BeanCardContainer>
  );
};

export default BeanCard;
