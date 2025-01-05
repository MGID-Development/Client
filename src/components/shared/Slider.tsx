import { ArrowIcon } from "@/images/icons";
import { Box } from "@mui/material";
import { Children, useEffect, useState } from "react";

const Slider = ({ children, width, buttonSx = {} }) => {
  const [current, setCurrent] = useState(0);
  const length = Children.count(children);
  const [visibleSlides, setVisibleSlides] = useState([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const slides = Children.toArray(children).slice(current, current + width);
    if (slides.length < width) {
      slides.push(
        ...Children.toArray(children).slice(0, width - slides.length)
      );
    }
    setVisibleSlides(slides);
  }, [current, width, children]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        component={"button"}
        onClick={prevSlide}
        style={{ transform: "rotate(180deg)" }}
        sx={buttonSx}
      >
        <ArrowIcon width={64} height={64} />
      </Box>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: `fit-content`,
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {visibleSlides.map((slide) => slide)}
      </Box>
      <Box component={"button"} onClick={nextSlide} sx={buttonSx}>
        <ArrowIcon width={64} height={64} />
      </Box>
    </Box>
  );
};

export default Slider;
