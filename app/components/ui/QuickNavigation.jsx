"use client";

import { Box, Card, Button } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import HelpIcon from "@mui/icons-material/Help";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsIcon from "@mui/icons-material/Settings";

export const QuickNavigation = ({
  home = true,
  dashboard = true,
  faqs = true,
  premiun = true,
  admin = true,
}) => {
  return (
    <Card
      sx={{
        mb: 1,
        p: { xs: 1.5, sm: 2 },
        backgroundColor: "primary.main",
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
        {home && (
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<HomeOutlinedIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.875rem",
                },
                color: "background.antiflash",
              }}
            >
              Inicio
            </Button>
          </Link>
        )}
        {dashboard && (
          <Link href="/zunsteps/dashboard" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<DashboardIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "background.antiflash",
              }}
            >
              Dashboard
            </Button>
          </Link>
        )}
        {faqs && (
          <Link href="/zunsteps/faqs" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<HelpIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "background.antiflash",
              }}
            >
              FAQs
            </Button>
          </Link>
        )}
        {premiun && (
          <Link href="/zunsteps/premium" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<VerifiedIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "background.green",
                fontWeight: 600,
              }}
            >
              Premium
            </Button>
          </Link>
        )}
        {admin && (
          <Link href="/admin" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<SettingsIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "background.antiflash",
                fontWeight: 600,
              }}
            >
              Gestión
            </Button>
          </Link>
        )}
      </Box>
    </Card>
  );
};
