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

const BeansList: React.FC = observer(() => {
  return (
    <Table sx={{ width: "100%" }}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell
            style={{ fontWeight: "600", fontSize: "16px", textAlign: "start" }}
          >
            Flavor Name
          </TableCell>
          <TableCell
            style={{ fontWeight: "600", fontSize: "16px", textAlign: "start" }}
          >
            Description
          </TableCell>
          <TableCell
            style={{ fontWeight: "600", fontSize: "16px", textAlign: "start" }}
          >
            Group Name
          </TableCell>
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
