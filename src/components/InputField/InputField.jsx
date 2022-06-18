import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import useStyles from "./style.js";

const PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$";
const PASSWORD_TEXT =
  "Password must have: \nMinimum of 8 characters \nAnd have at least 1 Uppercase, 1 Lowercase and 1 Number";

const InputField = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  error,
  handleShowPassword,
  value,
  helperText,
  required,
}) => {
  const classes = useStyles();

  return (
    <TextField
      value={value}
      helperText={helperText}
      id={name}
      className={classes.textField}
      name={name}
      label={label}
      type={type}
      onChange={handleChange}
      autoFocus={autoFocus}
      variant="outlined"
      color="primary"
      error={error}
      fullWidth
      required={required}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : name === "age"
          ? { inputProps: { min: 16, max: 65 } }
          : type === "number"
          ? { inputProps: { min: 0 } }
          : {}
      }
      inputProps={
        name === "password"
          ? {
              pattern: PASSWORD_PATTERN,
              title: PASSWORD_TEXT,
            }
          : {}
      }
    />
  );
};

export default InputField;
