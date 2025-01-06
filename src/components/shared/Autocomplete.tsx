import { ArrowIcon } from "@/images/icons";
import { Autocomplete } from "@mui/material";
import { Box, useTheme } from "@mui/system";
type CustomAutocompleteOption = {
  label: string;
  [key: string]: any;
};

type CustomAutocompleteProps = {
  options: CustomAutocompleteOption[];
};
const CustomAutocomplete = ({ options }: CustomAutocompleteProps) => {
  const theme = useTheme();
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <div
          ref={params.InputProps.ref}
          className="filter_input_wrapper"
          style={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
            padding: "0 4px",
          }}
        >
          <Box
            sx={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
          <input
            type="text"
            style={{
              color: theme.palette.primary.contrastText,
              border: "none",
            }}
            {...params.inputProps}
            className="filter_input"
            placeholder="Wybierz markę pojazdu"
          />
          <ArrowIcon
            width={20}
            height={20}
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
      )}
    />
  );
};

export default CustomAutocomplete;
