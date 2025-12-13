// app/components/ui/NavButtonGroup.jsx
"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
export function NavButtonGroup() {
  const buttons = [
    {
      href: "/",
      label: "Inicio",
      icon: <HomeOutlinedIcon />,
    },
    {
      href: "/zunsteps/premium",
      label: "Premium",
      icon: <VerifiedOutlinedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        gap: { xs: 0.5, md: 1 },
        width: "100%",
      }}
    >
      {buttons.map((button) => (
        <Link key={button.href} href={button.href} style={{ flex: 1 }}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              gap: "8px",
              padding: { xs: "10px 12px", md: "12px 16px" },
              backgroundColor: "background.antiflash",
              border: "1.5px solid #f0f0f0",
              color: "primary.main",
              fontWeight: 500,
              fontSize: { xs: "0.9rem", md: "1rem" },
              textTransform: "capitalize",
              transition: "all 200ms",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              ":hover": {
                color: "primary.main",
                backgroundColor: "background.main",
                border: "1.5px solid #2c3e50",
                boxShadow: 3,
              },
            }}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  md: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                },
              }}
            >
              {button.icon}
              {button.label}
            </Box>
          </Button>
        </Link>
      ))}
    </Box>
  );
}
