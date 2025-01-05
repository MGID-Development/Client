import Navbar from "@/components/Navbar/Navbar";
import { Box, useTheme } from "@mui/material";
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
    </Box>
  );
};

export default Home;
