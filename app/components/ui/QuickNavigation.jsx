"use client";

import { Box, Card, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HelpIcon from "@mui/icons-material/Help";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsIcon from "@mui/icons-material/Settings";

const DEFAULT_NAV_ITEMS = [
  { href: "/", label: "Inicio", icon: HomeOutlinedIcon },
  { href: "/zunsteps/dashboard", label: "Dashboard", icon: DashboardIcon },
  { href: "/zunsteps/faqs", label: "FAQs", icon: HelpIcon },
  {
    href: "/zunsteps/premium",
    label: "Premium",
    icon: VerifiedIcon,
    accent: "gold",
  },
  { href: "/admin", label: "Gestión", icon: SettingsIcon },
];

const ACCENT_THEMES = {
  gold: { active: "primary.gold", hover: "rgba(212, 175, 55, 0.18)" },
  blue: { active: "primary.blue", hover: "rgba(25, 118, 210, 0.18)" },
  green: { active: "background.green", hover: "rgba(51, 210, 164, 0.18)" },
};

function NavLink({ href, label, icon: Icon, accent, isActive }) {
  const theme = ACCENT_THEMES[accent] || {};
  const activeColor = isActive
    ? theme.active || "background.antiflash"
    : "background.antiflash";
  const activeBg = isActive ? "rgba(255, 255, 255, 0.10)" : "transparent";
  const hoverBg = isActive
    ? "rgba(255, 255, 255, 0.18)"
    : theme.hover || "rgba(255, 255, 255, 0.08)";

  return (
    <Box component="li" sx={{ display: "inline-flex" }}>
      <Button
        component={Link}
        href={href}
        startIcon={
          <Icon
            aria-hidden="true"
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          />
        }
        aria-current={isActive ? "page" : undefined}
        disableElevation
        disableRipple
        sx={{
          minHeight: 40,
          px: { xs: 1.25, sm: 1.75 },
          py: 0.75,
          borderRadius: 2,
          color: activeColor,
          backgroundColor: activeBg,
          fontFamily: "monospace",
          fontSize: { xs: "0.8rem", sm: "0.875rem" },
          fontWeight: isActive ? 600 : 500,
          textTransform: "none",
          position: "relative",
          transition:
            "background-color 200ms ease, color 200ms ease, transform 150ms ease",
          "&::after": isActive
            ? {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: 3,
                transform: "translateX(-50%)",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: activeColor,
              }
            : {},
          "&:hover": {
            backgroundColor: hoverBg,
            transform: "translateY(-1px)",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "background.antiflash",
            outlineOffset: 2,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover": { transform: "none" },
          },
        }}
      >
        {label}
      </Button>
    </Box>
  );
}

export function QuickNavigation({
  items = DEFAULT_NAV_ITEMS,
  ariaLabel = "Navegación rápida",
  hideCurrent = false,
}) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const visibleItems = items.filter(
    (item) => !(hideCurrent && isActive(item.href))
  );

  return (
    <Card
      component="nav"
      aria-label={ariaLabel}
      sx={{
        mb: 1,
        p: { xs: 1, sm: 1.5 },
        backgroundColor: "primary.main",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: { xs: 0.5, sm: 1 },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {visibleItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            // label={item.label}
            icon={item.icon}
            accent={item.accent}
            isActive={isActive(item.href)}
          />
        ))}
      </Box>
    </Card>
  );
}
