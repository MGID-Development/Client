import CustomAutocomplete from "@/components/shared/Autocomplete";
import { carBrands } from "@/config/mockups/carBrands";
import { VenomIcon } from "@/images/icons";
import { Button, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";

const Filter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          padding: "1rem",
          flexDirection: "column",
          backgroundColor: theme.palette.secondary.main,
          width: "fit-content",
          borderRadius: "12px",
          position: "absolute",
          top: "-50%",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: theme.palette.secondary.contrastText,
          }}
        >
          <VenomIcon />
          <Box>
            <Typography variant="body1">Znajdź swoje auto</Typography>
            <Typography variant="body1">
              Ponad 100 000 części w systemie
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            color: theme.palette.secondary.contrastText,
          }}
        >
          <CustomAutocomplete options={carBrands} />
          <CustomAutocomplete options={carBrands} />
          <CustomAutocomplete options={carBrands} />
          <Button
            variant="contained"
            sx={{
              borderRadius: "9999px",
            }}
          >
            Szukaj
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
