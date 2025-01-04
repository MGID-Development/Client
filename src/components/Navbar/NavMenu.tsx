import navigationConfig from "@/config/mockups/navConfig";
import { ArrowIcon } from "@/images/icons";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Link, List, useTheme } from "@mui/material";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main }}>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <IconButton
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          sx={{ color: theme.palette.secondary.main }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          display: { xs: mobileMenuOpen ? "flex" : "none", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          gap: "1.5rem",
          textTransform: "uppercase",
          fontSize: "0.7rem",
          color: theme.palette.secondary.main + " !important",
          backgroundColor: theme.palette.primary.main,
          paddingY: "16px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {navigationConfig.map(({ label, href, subLinks }) =>
          subLinks ? (
            <Dropdown
              key={label}
              trigger={
                <Link
                  href={href}
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    ":hover": {
                      color: theme.palette.primary.contrastText,
                      fontWeight: "bold",
                    },
                  }}
                >
                  {label}
                  {subLinks && <ArrowIcon />}
                </Link>
              }
            >
              <List
                sx={{
                  gap: "0.5rem",
                  flexDirection: "column",
                  display: "flex",
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  padding: "1rem",
                  borderRadius: "4px",
                }}
              >
                {subLinks.map(({ label, href }) => (
                  <Link
                    href={href}
                    sx={{
                      color: theme.palette.secondary.main,
                      ":hover": {
                        color: theme.palette.primary.contrastText,
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </List>
            </Dropdown>
          ) : (
            <Link
              key={label}
              href={href}
              sx={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                ":hover": {
                  color: theme.palette.primary.contrastText,
                  fontWeight: "bold",
                },
              }}
            >
              {label}
            </Link>
          )
        )}
      </List>
    </Box>
  );
};

export default NavigationMenu;
