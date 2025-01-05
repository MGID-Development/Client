import { Box, Typography } from "@mui/material";

import ShopItem from "@/components/shared/ShopItem";
import Slider from "@/components/shared/Slider";
import { products } from "@/config/mockups/products";
import BusinessMan from "@/images/pictures/Caucasian.png";
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
        <Slider
          width={4}
          buttonSx={{
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
            },
          }}
        >
          {products.map((item, index) => (
            <ShopItem key={index} item={item} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default PromoAndNews;
