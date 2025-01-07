import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { jellyBeansStore } from "../../store";
import { observer } from "mobx-react-lite";
import ClearIcon from "@mui/icons-material/Clear";
import { muiColorReset } from "../../consts/mui";

const Filter = observer(() => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    jellyBeansStore.setFilter(event.target.value);
  };

  const handleClearFilter = () => {
    jellyBeansStore.setFilter("");
  };
  return (
    <TextField
      label="Filter"
      variant="outlined"
      size="small"
      value={jellyBeansStore.filter}
      onChange={handleFilterChange}
      sx={muiColorReset}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {jellyBeansStore.filter && (
              <IconButton onClick={handleClearFilter} edge="end">
                <ClearIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
});

export default Filter;
