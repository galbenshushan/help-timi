import React from "react";
import { jellyBeansStore } from "../../store";
import { Bean } from "../../types/JellyBeans";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BeanRow from "./BeanRow";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)`
  font-weight: 600;
  font-size: 28px;
  text-align: start;
`;

const StyledTableHeader = styled(TableRow)`
  border: none !important;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const BeansList: React.FC = observer(() => {
  return (
    <Table sx={{ width: "100%" }}>
      <TableHead>
        <StyledTableHeader>
          <TableCell></TableCell>
          <StyledTableCell>Flavor Name</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Group Name</StyledTableCell>
          <StyledTableCell>Color</StyledTableCell>
        </StyledTableHeader>
      </TableHead>
      <TableBody>
        {jellyBeansStore.paginatedBeans.map((bean: Bean) => (
          <BeanRow key={bean.BeanId} bean={bean} />
        ))}
      </TableBody>
    </Table>
  );
});

export default BeansList;
