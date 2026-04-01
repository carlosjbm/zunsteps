"use client";

import { Box, Card, Button } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import HelpIcon from "@mui/icons-material/Help";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsIcon from "@mui/icons-material/Settings";

export function LinkWithIcon({ link, icon, text }) {
  return (
    <Box>
      <Link href={link} style={{ textDecoration: "none" }}>
        <Button
          startIcon={icon}
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
          {text}
        </Button>
      </Link>
    </Box>
  );
}

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
          alignItems: "center",
        }}
      >
        {home && (
          <LinkWithIcon
            icon={<HomeOutlinedIcon />}
            link={"/"}
            text={"Inicio"}
          />
        )}
        {dashboard && (
          <LinkWithIcon
            icon={<DashboardIcon />}
            link={"/zunsteps/dashboard"}
            text={"Dashboard"}
          />
        )}
        {faqs && (
          <LinkWithIcon
            icon={<HelpIcon />}
            link={"/zunsteps/faqs"}
            text={"FAQs"}
          />
        )}
        {premiun && (
          <LinkWithIcon
            icon={<VerifiedIcon />}
            link={"/zunsteps/premium"}
            text={"Premium"}
          />
        )}
        {admin && (
          <LinkWithIcon
            icon={<SettingsIcon />}
            link={"/admin"}
            text={"Gestión"}
          />
        )}
      </Box>
    </Card>
  );
};
