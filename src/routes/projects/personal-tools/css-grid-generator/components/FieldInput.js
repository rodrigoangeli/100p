import { StyledTextField, OptionTextField } from "../styles/styles";
import { MenuItem, InputAdornment, Box } from "@mui/material";
import SvgIcon from "components/SvgIcon";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Icon = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.text.main,
  cursor: "pointer",
  "&:hover": {
    color: theme.status.background.error,
  },
}));

const FieldInput = (props) => {
  const [state, setState] = useState({ value: props.value, type: props.type });

  useEffect(() => {
    props.updateConfig({ value: state.value, type: state.type }, props.index);
  }, [state]);

  return (
    <Box key={`${props.property}_${props.index}`} className="flex">
      <StyledTextField
        fullWidth
        variant="filled"
        size="small"
        value={state.value}
        onChange={(event) =>
          setState({ ...state, value: event.target.value || "0" })
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <OptionTextField
                onChange={(event) =>
                  setState({ ...state, type: event.target.value || "0" })
                }
                value={state.type || "0"}
                select
                fullWidth
              >
                {props.select.map((option) => (
                  <MenuItem key={option.value} value={option.value || "0"}>
                    {option.label}
                  </MenuItem>
                ))}
              </OptionTextField>
            </InputAdornment>
          ),
        }}
      />
      {props.typeof === "array" && (
        <Icon
          onClick={() => props.removeOne(props.property, props.index)}
          className="w-4 ml-2 "
        >
          heroicons-outline:trash
        </Icon>
      )}
    </Box>
  );
};

export default FieldInput;
