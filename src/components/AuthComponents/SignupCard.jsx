import React from "react";

import useStyles from "./style";
import InputField from "../InputField/InputField";

const SignupCard = ({
  handleChange,
  handleShowPassword,
  showPassword,
  error,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.flex}>
        <InputField
          name="firstName"
          label="First Name"
          autoFocus
          type="text"
          handleChange={handleChange}
          required={true}
        />
        <InputField
          name="lastName"
          label="Last Name"
          type="text"
          handleChange={handleChange}
          required={true}
        />
      </div>
      <InputField
        name="email"
        label="Email"
        type="email"
        handleChange={handleChange}
        error={error}
        required={true}
      />
      <InputField
        name="password"
        label="Create Password"
        type={showPassword ? "text" : "password"}
        handleShowPassword={handleShowPassword}
        handleChange={handleChange}
        required={true}
      />
    </>
  );
};

export default SignupCard;
