import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { margin, cursor, borderRadius, padding, width, bg, color, hvBtn, atvBoxSdwBtn, boxSdwBtn, text, _onClick, children } =
    props;

  const styles = {
    margin: margin,
    bg: bg,
    color: color,
    hvBtn: hvBtn,
    atvBoxSdwBtn: atvBoxSdwBtn,
    boxSdwBtn: boxSdwBtn,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  bg: "#C4C4C4",
  color: "white",
  hvBtn: "darkgray",
  atvBoxSdwBtn: "none",
  boxSdwBtn: "0px 0px 10px 1px lightgray",
  padding: "12px 0px",
  borderRadius: "5px",
  cursor: "default",
};

const ElButton = styled.button`
  :hover {
    background-color: ${(props) => props.hvBtn};
  }
  :active {
    box-shadow: ${(props) => props.atvBoxSdwBtn};
  }
  box-shadow: ${(props) => props.boxSdwBtn};
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin:${props.margin}` : "")}/* ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : ""}; */
`;

export default Button;
