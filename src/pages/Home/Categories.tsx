import { categories } from "@/config/mockups/categories";
import Mechanic from "@/images/pictures/car_mechanic.png";
import { Box, Typography, useTheme } from "@mui/material";
const Categories = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "8rem 0",
        gap: "4rem",
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: theme.palette.secondary.contrastText,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          KATEGORIE CZĘŚCI
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          ZNAJDŹ CZĘŚCI PO KATEGORII
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: "1rem",
          borderRadius: "1rem",
          overflow: "hidden",
          marginTop: "2rem",
          zIndex: 2,
        }}
      >
        {[1, 2, 3].map((parentIndex) => (
          <Box
            key={parentIndex}
            sx={{
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {categories
              .filter((_, index) => index % 3 === parentIndex - 1)
              .map((category, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    backgroundColor: theme.palette.primary.contrastText,
                    px: "2rem",
                    py: "0.5rem",
                    gap: "3rem",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <category.icon />
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
              ))}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "1%",
          width: "240px",
          height: "540px",
          backgroundImage: `url(${Mechanic})`,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Categories;
