import { phoneNumber } from "@/config/contact";
import { PhoneCallingIcon } from "@/images/icons";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

export default NavTopBar;
