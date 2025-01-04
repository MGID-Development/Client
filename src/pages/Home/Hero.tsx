import backgroundImage from "@/images/backgrounds/hero.png";
import { Box, Typography, useTheme } from "@mui/material";
const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: "2rem",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Części samochodowe
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        najwyższej jakości
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
        Profesjonalna obsługa, szybka wysyłka i gwarancja satysfakcji.
      </Typography>
      <Typography variant="body1">
        Sprawdź naszą ofertę i zadbaj o swoje auto już dziś!
      </Typography>
    </Box>
  );
};

export default Hero;
