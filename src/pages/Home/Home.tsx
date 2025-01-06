import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box, useTheme } from "@mui/material";
import BrandSlider from "./BrandSlider";
import Categories from "./Categories";
import Filter from "./Filter";
import Hero from "./Hero";
import PromoAndNews from "./PromoAndNews";
const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Navbar />
      <Hero />
      <Filter />
      <PromoAndNews />
      <Categories />
      <BrandSlider />
      <Footer />
    </Box>
  );
};

export default Home;
