import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes({ data, setData, value }) {
  // trying to make a function

  const completeHandler = (value) => {
    setData(
      data.map((e) => {
        if (e.id === value.id) {
          return { ...e, completed: !e.completed };
        }
        return e;
      })
    );
  };

  return (
    <div>
      <Tooltip title="Check">
        <Checkbox
          {...label}
          icon={<StarBorderRoundedIcon />}
          checkedIcon={<StarRateRoundedIcon />}
          theme={theme}
          onClick={() => completeHandler(value)}
        />
      </Tooltip>
    </div>
  );
}
