import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    margin,
    cursor,
    borderRadius,
    padding,
    width,
    height,
    bg,
    color,
    hvBtn,
    atvBoxSdwBtn,
    boxSdwBtn,
    text,
    is_center,
    _onClick,
    children,
  } = props;

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
    height: height,
    is_center: is_center,
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
  height: false,
  bg: "#C4C4C4",
  color: "white",
  hvBtn: "darkgray",
  atvBoxSdwBtn: "none",
  boxSdwBtn: "0px 0px 10px 1px lightgray",
  padding: "12px 0px",
  borderRadius: "5px",
  cursor: "default",
  is_center: false,
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
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin:${props.margin}` : "")}
  ${(props) =>
    props.is_center
      ? `display:flex; flex-direction:column; align-items:center; justify-content:center`
      : ""} 
      /* ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : ""}; */
`;

export default Button;
