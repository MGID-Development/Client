import { images } from "@/images/brands";
import { Box } from "@mui/material";

const BrandSlider = () => {
  const brandImages = Object.values(images);

  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        backgroundColor: "#f9f9f9",
        padding: "1rem 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "4rem",
          animation: "scroll 60s linear infinite",
        }}
      >
        {[...brandImages, ...brandImages].map((src, index) => (
          <img
            key={`${index}-${src}`}
            src={src}
            alt={`Brand logo ${index}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        ))}
      </Box>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default BrandSlider;
