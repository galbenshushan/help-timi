import React from "react";
import { Bean } from "../../types/JellyBeans";
import { TableCell, TableRow, Tooltip } from "@mui/material";
import IconRenderer from "../UI/IconRenderer";
import { IconMapping } from "../../consts/general";
import styled from "styled-components";
import ColorContainer from "../ColorContainer";

interface BeanRowProps {
  bean: Bean;
}

const EllipsisText = styled.span`
  display: inline-block;
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const StyledTableRow = styled(TableRow)`
  background: rgba(255, 255, 255, 0.1);
  border: none !important;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BeanRow: React.FC<BeanRowProps> = ({ bean }) => {
  return (
    <StyledTableRow key={bean.BeanId}>
      <TableCell>
        <img src={bean.ImageUrl} alt={bean.FlavorName} width={50} height={50} />
      </TableCell>
      <TableCell>
        {bean.FlavorName}
        {Object.values(IconMapping).map((icon) =>
          bean[icon.type] ? (
            <IconRenderer
              key={icon.type}
              type={icon.type}
              isActive={bean[icon.type]}
              tooltip={icon.tooltip}
            />
          ) : null
        )}
      </TableCell>
      <TableCell>
        <Tooltip title={bean.Description}>
          <EllipsisText>{bean.Description}</EllipsisText>
        </Tooltip>
      </TableCell>
      <TableCell>{bean.GroupNameSerialized || "N/A"}</TableCell>
      <TableCell>
        <ColorContainer color={bean.ColorGroup} />
      </TableCell>
    </StyledTableRow>
  );
};

export default BeanRow;
