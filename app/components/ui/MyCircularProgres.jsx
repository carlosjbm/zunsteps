"use client";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
export const MyCircularProgres = ({ value = 70, label = "Label" }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={value} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color={value > 30 ? "background.green" : "red"}>
            {value}%
          </Typography>
        </Box>
      </Box>
      <Typography color={value > 30 ? "background.green" : "red"}>
        {label}
      </Typography>
    </Box>
  );
};
