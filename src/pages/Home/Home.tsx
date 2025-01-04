import Navbar from "@/components/Navbar/Navbar";
import { Box, useTheme } from "@mui/material";
import Filter from "./Filter";
import Hero from "./Hero";
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
    </Box>
  );
};

export default Home;
