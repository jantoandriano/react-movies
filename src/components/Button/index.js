import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ children, callback, type }) => {
  return (
    <React.Fragment>
      <Wrapper type={type} onClick={callback}>
        {children}
      </Wrapper>
    </React.Fragment>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  callback: PropTypes.func,
};

export default Button;
