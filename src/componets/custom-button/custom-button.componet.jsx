import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoggleSignIn, ...otherProps }) => (
  <button
    className={`${isGoggleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
