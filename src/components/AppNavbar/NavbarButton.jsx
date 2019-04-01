import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = props => {
  const {
    animation,
    background,
    backgroundHover,
    color,
    colorHover,
    children,
    ...others
  } = props;

  const Styled = withStyles({
    root: {
      transition: "200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      minWidth: "unset",
      borderRadius: "unset",
      textTransform: "unset",
      lineHeight: "unset",
      height: "36px",
      padding: "0px 10px",
      color,
      animation,
      background,
      "&:hover": {
        color: colorHover,
        backgroundColor: backgroundHover
      }
    }
  })(Button);

  return <Styled {...others}>{children}</Styled>;
};

StyledButton.defaultProps = {
  background: "transparent",
  backgroundHover: "rgba(255, 255, 255, 0.08)",
  color: "rgba(255, 255, 255, 0.3)",
  colorHover: "white",
  animation: "unset"
};

StyledButton.propTypes = {
  background: PropTypes.string,
  backgroundHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  children: PropTypes.node.isRequired,
  animation: PropTypes.string
};

export default StyledButton;
