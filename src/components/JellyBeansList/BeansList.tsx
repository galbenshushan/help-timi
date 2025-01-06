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
  font-size: 16px;
  text-align: start;
`;

const BeansList: React.FC = observer(() => {
  return (
    <Table sx={{ width: "100%" }}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <StyledTableCell>Flavor Name</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Group Name</StyledTableCell>
          <StyledTableCell>Color</StyledTableCell>
        </TableRow>
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
