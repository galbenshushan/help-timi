import React from "react";
import { jellyBeansStore } from "../../store";
import { IconButton, Box } from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import GridOnIcon from "@mui/icons-material/GridOn";
import { ViewType } from "../../enums/beans";
import Sort from "./Sort";
import Filter from "./Filter";

const Toolbar = () => {
  const handleToggleView = () => {
    const newViewType = jellyBeansStore.isTable ? ViewType.GRID : ViewType.TABLE;
    jellyBeansStore.setViewType(newViewType);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginBottom={2}
        gap={2}
      >
        <Filter />
        <Sort />
      </Box>
      <IconButton onClick={handleToggleView}>
        {jellyBeansStore.isTable ? <GridOnIcon /> : <TableChartIcon />}
      </IconButton>
    </div>
  );
};

export default Toolbar;
