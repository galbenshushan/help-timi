import React from "react";
import { jellyBeansStore } from "../../store";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { muiColorReset } from "../../consts/mui";

const Sort = observer(() => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    jellyBeansStore.setSortOrder(event.target.value);
  };

  return (
    <FormControl
      size="small"
      sx={{
        width: "300px",
        borderRadius: 1,
      }}
    >
      <InputLabel sx={{ color: "white" }}>Sort by</InputLabel>
      <Select
        value={jellyBeansStore.sortOrder}
        onChange={handleSortChange}
        label="Sort page by"
        sx={muiColorReset}
      >
        <MenuItem value="asc">A-Z</MenuItem>
        <MenuItem value="desc">Z-A</MenuItem>
        <MenuItem value="groupName">Group Name</MenuItem>
        <MenuItem value="color">Color</MenuItem>
      </Select>
    </FormControl>
  );
});

export default Sort;
