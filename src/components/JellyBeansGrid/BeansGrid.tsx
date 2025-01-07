import React from "react";
import { Box } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { jellyBeansStore } from "../../store";
import { Bean } from "../../types/JellyBeans";
import BeanCard from "./BeanCard";

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
