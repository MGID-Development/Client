import { HeartIcon } from "@/images/icons";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

const ShopItem = ({ item }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        textAlign: "start",
        color: theme.palette.secondary.main,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      {(item.status === "new" || item.status === "promo") && (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor:
              item.status === "new"
                ? theme.palette.primary.main
                : theme.palette.warning.main,
            color: theme.palette.primary.contrastText,
            padding: "0.2rem ",
            textAlign: "center",
          }}
        >
          {item.status === "new" ? "Nowość" : "Promocja"}
        </Box>
      )}
      <img
        src={item.img}
        alt={item.name}
        style={{
          marginTop: "27px",
          width: "200px",
          height: "200px",
          padding: "4px",
        }}
      />
      <Divider />
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Typography
            variant="body2"
            sx={{
              display: item.status === "promo" ? "block" : "none",
              textDecoration: item.status === "promo" ? "line-through" : "none",
            }}
          >
            {item.oldPrice}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.warning.main,
              fontWeight: "600",
            }}
          >
            {item.price} zł
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.custom.grayText,
            fontWeight: "600",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.custom.grayText,
          }}
        >
          {item.model}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
              width: "100%",
              fontSize: "0.7rem",
              borderRadius: "8px 0 0 8px ",
            }}
          >
            Dodaj do koszyka
          </Button>
          <button
            style={{
              padding: "0.1rem !important",
              backgroundColor: theme.palette.custom.gray,
              color: theme.palette.secondary.light,
              border: "none",
              borderRadius: "0 8px 8px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HeartIcon />
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopItem;
