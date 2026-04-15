"use client";
import {
  CheckCircleOutline,
  ContentCopyOutlined,
  DescriptionOutlined,
  LinkOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import { useState } from "react";

const urlTest = `htts://link.comninieu22n3uh2u3hnceun9h2h9h`;
const descriptionTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          reprehenderit itaque sit commodi consequatur nihil, consequuntur
          laboriosam saepe voluptates nam quidem eos exercitationem perferendis
          quaerat aliquid rerum deleniti corrupti quasi.`;

export const ShowLinks = ({ url, description }) => {
  const [copiated, setCopiated] = useState(false);
  const handleClikLink = () => {
    setCopiated(true);
    setTimeout(() => {
      setCopiated(false);
    }, 2000);
  };

  return (
    <Card sx={{ p: 3, display: "flex", gap: 1, flexDirection: "column" }}>
      <Box
        onClick={handleClikLink}
        sx={{
          display: "flex",
          gap: 1.5,
          alignItems: "center",
          p: 1.3,
          borderRadius: 10,
          backgroundColor: "background.antiflash",
        }}
      >
        {copiated ? (
          <CheckCircleOutline sx={{ color: "background.green" }} />
        ) : (
          <LinkOutlined />
        )}
        <Typography color={copiated ? "background.green" : "primary.main"}>
          {urlTest.slice(0, 20)}...
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <DescriptionOutlined sx={{ color: "primary.text" }} />
        <Typography color="primary.text">
          {descriptionTest.slice(0, 30)}...
        </Typography>
      </Box>
      {/* <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
        <Person2Outlined sx={{ color: "primary.text" }} />
        <Typography color="primary.text">Administrador</Typography>
      </Box> */}
    </Card>
  );
};
