import Navbar from "@/components/Navbar/Navbar";
import { Box, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Navbar />
      <h1>Home</h1>
    </Box>
  );
};

export default Home;
