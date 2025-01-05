import { ArrowIcon } from "@/images/icons";
import { Box } from "@mui/material";
import { Children, useEffect, useState } from "react";

const Slider = ({ children, buttonSx = {}, limit = 3 }) => {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(limit);
  const length = Children.count(children);
  const [visibleSlides, setVisibleSlides] = useState([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 600) setWidth(1);
      else if (window.innerWidth < 900) setWidth(2);
      else setWidth(limit);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        component={"button"}
        onClick={prevSlide}
        style={{ transform: "rotate(180deg)" }}
        sx={{
          ...buttonSx,
          order: { xs: 2, sm: 0 },
        }}
      >
        <ArrowIcon width={64} height={64} />
      </Box>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          gap: "2rem",
          padding: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {visibleSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
            }}
          >
            {slide}
          </Box>
        ))}
      </Box>
      <Box
        component={"button"}
        onClick={nextSlide}
        sx={{
          ...buttonSx,
          order: { xs: 2, sm: 0 },
        }}
      >
        <ArrowIcon width={64} height={64} />
      </Box>
    </Box>
  );
};

export default Slider;
