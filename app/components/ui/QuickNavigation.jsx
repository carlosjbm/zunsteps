"use client";

import { Box, Card, Button } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import HelpIcon from "@mui/icons-material/Help";
import VerifiedIcon from "@mui/icons-material/Verified";

export const QuickNavigation = () => {
  return (
    <Card
      sx={{
        mb: 5,
        p: { xs: 1.5, sm: 2 },
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 1.5 },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<HomeOutlinedIcon />}
            variant="text"
            size="small"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Inicio
          </Button>
        </Link>
        <Link href="/zunsteps/dashboard" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<DashboardIcon />}
            variant="text"
            size="small"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Dashboard
          </Button>
        </Link>
        <Link href="/zunsteps/docs" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<SchoolIcon />}
            variant="text"
            size="small"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Documentación
          </Button>
        </Link>
        <Link href="/zunsteps/faqs" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<HelpIcon />}
            variant="text"
            size="small"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            FAQs
          </Button>
        </Link>
        <Link href="/zunsteps/premium" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<VerifiedIcon />}
            variant="text"
            size="small"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Premium
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
