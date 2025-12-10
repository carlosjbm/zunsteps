import React from "react";
import { Button, Typography } from "@mui/material";

export const WhiteMiddButton = ({ text, actionFunction, icon }) => {
  return (
    <Button
      onClick={actionFunction}
      sx={{
        width: { xs: "100%", sm: 150 },
        minWidth: 120,
        px: { xs: 1.5, sm: 3 },
        py: { xs: 1, sm: 1.5 },
        backgroundColor: "background.antiflash",
        border: "1.5px solid #f0f0f0",
        boxShadow: { xs: 1, sm: 2 },
        gap: { xs: "6px", sm: "10px" },
        fontSize: { xs: "0.95rem", sm: "1.1rem" },
        alignItems: "center",
        justifyContent: "center",
        ":hover": {
          backgroundColor: "background.main",
          border: "1.5px solid #2c3e50",
          boxShadow: 3,
        },
      }}
    >
      <Typography sx={{ fontSize: "inherit", fontWeight: 500 }}>
        {text}
      </Typography>
      {icon &&
        React.cloneElement(icon, {
          sx: { fontSize: { xs: "1.3rem", sm: "1.6rem" } },
        })}
    </Button>
  );
};
