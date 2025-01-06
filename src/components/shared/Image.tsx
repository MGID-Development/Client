import { Box, SxProps } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageProps = {
  src: string;
  alt: string;
  height: string;
  width: string;
  sx?: SxProps;
};

const Image = ({ src, alt, height, width, sx }: ImageProps) => {
  return (
    <Box sx={sx}>
      <LazyLoadImage alt={alt} height={height} src={src} width={width} />
    </Box>
  );
};
export default Image;
