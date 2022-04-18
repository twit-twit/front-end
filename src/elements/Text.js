import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    fontWeight,
    cursor,
    display,
    color,
    size,
    children,
    margin,
    is_center,
    verticalAlign,
    textDecoration,
    _onClick,
    text,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    cursor: cursor,
    display: display,
    text: text,
    fontWeight: fontWeight,
    is_center: is_center,
    verticalAlign: verticalAlign,
    textDecoration: textDecoration,
  };

  return (
    <Span {...styles} onClick={_onClick}>
      {children}
    </Span>
  );
};

Text.defaultProps = {
  _onClick: () => {},
  children: null,
  bold: false,
  color: "#222831",
  size: "15px",
  margin: false,
  display: "inline",
  fontWeight: 700,
  is_center: false,
  verticalAlign: false,
  textDecoration: "none",
};

const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  box-sizing: border-box;
  text-align: ${(props) => (props.text ? "center" : "")};
  display: ${(props) => props.display};
  vertical-align: ${(props) => props.verticalAlign};
  text-decoration: ${(props) => props.textDecoration};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")}
  ${(props) =>
    props.is_center
      ? `display:flex; flex-direction:column; align-items:center; justify-content:center`
      : ""}
`;

export default Text;
