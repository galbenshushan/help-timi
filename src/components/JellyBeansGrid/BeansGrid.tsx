import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import { jellyBeansStore } from "../../store";
import { Bean } from "../../types/JellyBeans";
import IconRenderer from "../UI/IconRenderer";
import { IconMapping } from "../../consts/general";
import ColorContainer from "../ColorContainer";
import BeanCard from "./BeanCard";

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
`;

const BeansGrid = () => {
  return (
    <Observer>
      {() => (
        <Box>
          <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
            {jellyBeansStore.paginatedBeans.map((bean: Bean) => (
              <BeanCard key={bean.BeanId} bean={bean} />
            ))}
          </Box>
        </Box>
      )}
    </Observer>
  );
};

export default BeansGrid;
