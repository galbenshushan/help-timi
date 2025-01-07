import React from "react";
import BeansList from "../components/JellyBeansList/BeansList";
import { jellyBeansStore } from "../store";
import { ViewType } from "../enums/beans";
import BeansGrid from "../components/JellyBeansGrid/BeansGrid";
import { Pagination } from "@mui/material";
import { observer } from "mobx-react-lite";
import Toolbar from "../components/Toolbar/Toolbar";

const Main: React.FC = observer(() => {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    jellyBeansStore.setPage(newPage - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Jelly Beans {jellyBeansStore.isTable ? ViewType.TABLE : ViewType.GRID}
      </h1>
      <Toolbar />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {jellyBeansStore.isTable ? <BeansList /> : <BeansGrid />}
      </div>
      <Pagination
        count={jellyBeansStore.totalPages}
        page={jellyBeansStore.page + 1}
        onChange={handleChangePage}
        color="primary"
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            color: "#d4731c",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#d4731c",
            color: "white",
          },
        }}
      />
    </div>
  );
});

export default Main;
