import React from "react";
import { StyledTextField } from "../styles/styles";
import { MenuItem, Button } from "@mui/material";

const FieldsWrapper = ({ config, options, children, property, ...rest }) => {
  return options.type === "array" ? (
    <>
      {config.map((e, index) =>
        React.cloneElement(children, {
          value: e.value,
          type: e.type,
          select: options.select,
          typeof: options.type,
          index,
          property,
          updateConfig: (e, index) => rest.updateConfig(e, index),
          removeOne: (e, index) => rest.removeOne(e, index),
        })
      )}
      <Button
        fullWidth
        sx={{ marginTop: "5px!important" }}
        onClick={() => rest.addOne(property)}
        variant="contained"
        size="small"
        color="primary"
      >
        Add new
      </Button>
    </>
  ) : options.type === "object" ? (
    React.cloneElement(children, {
      value: config.value,
      type: config.type,
      select: options.select,
      typeof: options.type,
      updateConfig: (e) => rest.updateConfig(e),
    })
  ) : (
    <StyledTextField
      fullWidth
      variant="filled"
      select
      size="small"
      value={config}
      onChange={(e) => rest.updateConfig(e.target.value)}
    >
      {options.select.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default FieldsWrapper;
