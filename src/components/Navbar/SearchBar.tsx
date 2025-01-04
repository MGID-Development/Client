import { SearchIcon } from "@/images/icons";
import { Box, Input, useTheme } from "@mui/material";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        maxHeight: "44px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          minWidth: { xs: "100%", sm: "200px", lg: "300px", xl: "500px" },
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: "999999px",
          paddingLeft: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxHeight: "44px",
          border: "none",
        }}
      >
        <Input
          type="text"
          placeholder="Wyszukaj"
          sx={{ maxHeight: "44px", border: "none", width: "90%" }}
        />
        <SearchIcon
          style={{
            position: "absolute",
            marginLeft: "1rem",
            right: "-1px",
            border: `solid 12px ${theme.palette.secondary.main}`,
            borderRadius: "999999px",
            padding: "0.5rem",
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};
export default SearchBar;
