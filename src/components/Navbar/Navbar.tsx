import Image from "@/components/shared/Image";
import { phoneNumber } from "@/config/contact";
import {
  AccountIcon,
  CartIcon,
  FavouriteIcon,
  PhoneCallingIcon,
} from "@/images/icons";
import Logo from "@/images/logos/Logo.svg";
import {
  AppBar,
  Box,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

const NavTopBar = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          color: theme.palette.primary.contrastText,
          paddingX: "184px",
          paddingY: "0.5rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: theme.palette.primary.contrastText,
            display: { xs: "none", md: "flex" },
            gap: "1rem",
            justifyItems: "center",
            fontSize: "0.875rem",
          }}
        >
          <PhoneCallingIcon width={18} height={18} />
          {phoneNumber}
        </Box>
        <Box
          sx={{
            color: theme.palette.primary.contrastText,
            display: "flex",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              ":hover": { color: theme.palette.primary.main },
              cursor: "pointer",
            }}
          >
            Logowanie
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              ":hover": { color: theme.palette.primary.main },
              cursor: "pointer",
            }}
          >
            Rejestracja
          </Typography>
        </Box>
      </Box>
      <hr style={{ margin: 0, opacity: 0.3 }} />
    </>
  );
};

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <NavTopBar />
        <Toolbar
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr 1fr" },
            paddingX: { xs: "1rem", lg: "184px" },
          }}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={"215px"}
            height={"34px"}
            sx={{ cursor: "pointer" }}
          />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: "100%",
            }}
          >
            <SearchBar />
          </Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <ListItem>
              <Link
                href="/"
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  ":hover": { color: theme.palette.primary.main },
                }}
              >
                <FavouriteIcon /> Ulubione
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/contact"
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  ":hover": { color: theme.palette.primary.main },
                }}
              >
                <CartIcon /> Koszyk
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/auth"
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  ":hover": { color: theme.palette.primary.main },
                }}
              >
                <AccountIcon />
                Konto
              </Link>
            </ListItem>
          </List>
        </Toolbar>
        <NavMenu />
      </AppBar>
    </Box>
  );
};
export default Navbar;
