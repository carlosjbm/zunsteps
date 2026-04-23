"use client";
import {
  CheckCircleOutline,
  DescriptionOutlined,
  LinkOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import { useFetch } from "../../lib/hooks/useFetch";
import Link from "next/link";
import { WaitingCircular } from "../reusables/WaitingData";

export const ShowLinks = () => {
  const [copiated, setCopiated] = useState(false);
  const { data, loading, refetch } = useFetch("/api/links");

  const handleClikLink = () => {
    setCopiated(true);
    setTimeout(() => {
      setCopiated(false);
    }, 2000);
  };

  return (
    <Card sx={{ p: 3, display: "flex", gap: 1, flexDirection: "column" }}>
      {loading ? (
        <WaitingCircular />
      ) : (
        data.map((l) => {
          return (
            <Box key={l.id}>
              <Box
                onClick={() => {
                  handleClikLink();
                }}
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
                <Typography
                  color={copiated ? "background.green" : "primary.main"}
                >
                  <Link href={l.url} target="_blanck">
                    {l.url.slice(0, 30)}...
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  marginTop: 1.5,
                  marginLeft: 0.5,
                }}
              >
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <DescriptionOutlined sx={{ color: "primary.text" }} />
                  <Typography color="primary.text">
                    {l.descripcion.slice(0, 50)}...
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <Person2Outlined sx={{ color: "primary.text" }} />
                  <Typography color="primary.text">{l.user_name}</Typography>
                </Box>
              </Box>
            </Box>
          );
        })
      )}
    </Card>
  );
};
