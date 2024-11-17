import Image from "@/components/shared/Image";
import Logo from "@/images/logos/Logo.svg";
import { AppBar, Box, Link, List, ListItem, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Navbar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          paddingX: "164px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={215}
            height={34}
            sx={{ cursor: "pointer" }}
          />
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <ListItem>
              <Link href="/">Ulubione</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact">Koszyk</Link>
            </ListItem>
            <ListItem>
              <Link href="/auth">Konto</Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
