import { Box, Typography } from "@mui/material";

import ShopItem from "@/components/shared/ShopItem";
import BusinessMan from "@/images/pictures/Caucasian.png";
import Kolo from "@/images/pictures/Kolo.png";
import theme from "@/styles/theme/theme";
const PromoAndNews = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(90vh - 64px)",
        marginTop: { xs: "148px", md: "0" },
        padding: "0.5rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${BusinessMan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "540px",
          width: "250px",
          left: "1%",
          bottom: "0",
          position: "absolute",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          maxWidth: "400px",
          textAlign: "center",
          color: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h6">NAJLEPSZE OFERTY</Typography>
        <Typography variant="h4">NOWOŚCI I PROMOCJE</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <ShopItem
          item={{
            status: "new",
            img: Kolo,
            name: "Koszula",
            price: "99.99",
            oldPrice: "109.99",
            model: "Koszula w kratę",
          }}
        />
        <ShopItem
          item={{
            status: "new",
            img: Kolo,
            name: "Koszula",
            price: "99.99",
            oldPrice: "109.99",
            model: "Koszula w kratę",
          }}
        />
        <ShopItem
          item={{
            status: "promo",
            img: Kolo,
            name: "Koszula",
            price: "99.99",
            oldPrice: "109.99",
            model: "Koszula w kratę",
          }}
        />
        <ShopItem
          item={{
            status: "new",
            img: Kolo,
            name: "Koszula",
            price: "99.99",
            oldPrice: "109.99",
            model: "Koszula w kratę",
          }}
        />
        <ShopItem
          item={{
            status: "promo",
            img: Kolo,
            name: "Koszula",
            price: "99.99",
            oldPrice: "109.99",
            model: "Koszula w kratę",
          }}
        />
      </Box>
    </Box>
  );
};

export default PromoAndNews;
