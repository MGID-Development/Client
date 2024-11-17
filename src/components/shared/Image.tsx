import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Image = ({ src, alt, height, width, sx }) => {
  return (
    <Box sx={sx}>
      <LazyLoadImage alt={alt} height={height} src={src} width={width} />
    </Box>
  );
};
export default Image;
