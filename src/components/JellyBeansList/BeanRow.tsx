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
`;

const BeanRow: React.FC<BeanRowProps> = ({ bean }) => {
  return (
    <TableRow key={bean.BeanId}>
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
    </TableRow>
  );
};

export default BeanRow;
