"use client";

import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

export const Searcher = ({ collection, searchFunction, resetFunction }) => {
  const [item, setItem] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 2 },
        p: { xs: 1, sm: 2 },
        width: "100%",
        maxWidth: 500,
        boxSizing: "border-box",
        alignItems: "stretch",
      }}
    >
      <Input
        sx={{
          width: "100%",
          flex: 1,
          fontSize: { xs: "1rem", sm: "1.1rem" },
          bgcolor: "background.paper",
          borderRadius: 1,
          px: 1,
        }}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Buscar un contenido específico..."
        value={item}
        disableUnderline
      />
      <Button
        onClick={() => searchFunction(item, collection)}
        sx={{
          minWidth: { xs: 40, sm: 48 },
          minHeight: { xs: 40, sm: 48 },
          px: { xs: 1, sm: 2 },
          bgcolor: "background.green",
          color: "primary.contrastText",
          borderRadius: 1,
          boxShadow: 1,
          ":hover": {
            color: "primary.main",
            bgcolor: "background.main",
            border: "1.5px solid #2c3e50",
            transition: "200ms",
          },
        }}
      >
        <SearchOutlined />
      </Button>
      <Button
        sx={{
          border: "1px solid #e95354",
          color: "#e95354",
          px: { xs: 1, sm: 2 },
          minHeight: { xs: 40, sm: 48 },
          borderRadius: 1,
          boxShadow: 1,
        }}
        onClick={() => {
          resetFunction();
          setItem("");
        }}
      >
        reset
      </Button>
    </Box>
  );
};
