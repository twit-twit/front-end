import React from "react";
import styled from "styled-components";

const TextBox = (props) => {
  const {
    height,
    width,
    margin,
    padding,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    position,
    display,
    top,
    bottom,
    right,
    left,
    zIndex,
    textAlign,
    is_center,
    is_middle,
    verticalAlign,
    children,
    _onClick,
  } = props;

  const styles = {
    height: height,
    width: width,
    margin: margin,
    padding: padding,
    maxHeight: maxHeight,
    minHeight: minHeight,
    maxWidth: maxWidth,
    minWidth: minWidth,
    position: position,
    display: display,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    zIndex: zIndex,
    textAlign: textAlign,
    is_center: is_center,
    verticalAlign: verticalAlign,
    is_middle: is_middle,
  };

  return (
    <Div {...styles} onClick={_onClick}>
      {children}
    </Div>
  );
};

TextBox.defaultProps = {
  _onClick: () => {},
  children: null,
  height: "38px",
  width: "266px",
  margin: "0px",
  padding: "0px",
  maxHeight: "none",
  minHeight: "auto",
  maxWidth: "none",
  minWidth: "0px",
  position: "static",
  display: "flex",
  top: "auto",
  bottom: "auto",
  right: "auto",
  left: "auto",
  zIndex: "auto",
  textAlign: "center",
  is_center: false,
  is_middle: false,
  verticalAlign: false,
};

const Div = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  text-align: ${(props) => props.textAlign};
  box-sizing: none;
  line-height: 20px;
  white-space: pre-wrap;
  ${(props) =>
    props.is_center
      ? `display:flex; flex-direction:column; align-items:center; justify-content:center`
      : ""};
  ${(props) =>
    props.is_middle
      ? `display:flex; flex-direction:row; align-items:center; justify-content:center`
      : ""};
  vertical-align: ${(props) => props.verticalAlign};
`;

export default TextBox;
