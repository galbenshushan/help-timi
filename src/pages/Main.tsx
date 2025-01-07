import React from "react";
import BeansList from "../components/JellyBeansList/BeansList";
import { jellyBeansStore } from "../store";
import { ViewType } from "../enums/beans";
import BeansGrid from "../components/JellyBeansGrid/BeansGrid";
import { Pagination } from "@mui/material";
import { observer } from "mobx-react-lite";
import Toolbar from "../components/Toolbar/Toolbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PaginationWrapper = styled(Pagination)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  & .MuiPaginationItem-root {
    color: white;
  }
  & .MuiPaginationItem-root.Mui-selected {
    background-color: #d4731c !important;
    color: white !important;
  }
  &:hover {
    & .MuiPaginationItem-root.Mui-selected {
      background-color: #d4731c !important;
      color: white !important;
    }
  }
`;

const Main: React.FC = observer(() => {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    jellyBeansStore.setPage(newPage - 1);
  };

  return (
    <Container>
      <h1>
        Jelly Beans {jellyBeansStore.isTable ? ViewType.TABLE : ViewType.GRID}
      </h1>
      <Toolbar />
      <ContentWrapper>
        {jellyBeansStore.isTable ? <BeansList /> : <BeansGrid />}
      </ContentWrapper>
      <PaginationWrapper
        count={jellyBeansStore.totalPages}
        page={jellyBeansStore.page + 1}
        onChange={handleChangePage}
      />
    </Container>
  );
});

export default Main;
