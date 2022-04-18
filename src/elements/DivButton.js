import React from "react";
import styled from "styled-components";

const DivButton = (props) => {
  const {
    bg,
    border,
    margin,
    height,
    width,
    padding,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    position,
    display,
    zIndex,
    cursor,
    verticalAlign,
    _onClick,
    children,
  } = props;

  const styles = {
    bg: bg,
    border: border,
    margin: margin,
    height: height,
    width: width,
    padding: padding,
    maxHeight: maxHeight,
    minHeight: minHeight,
    maxWidth: maxWidth,
    minWidth: minWidth,
    position: position,
    display: display,
    zIndex: zIndex,
    cursor: cursor,
    verticalAlign: verticalAlign,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

DivButton.defaultProps = {
  children: null,
  _onClick: () => {},
  bg: "#ffffff",
  border: "1px solid #Cfd9de",
  margin: "0px 20px 0px 0px",
  height: "40px",
  width: "300px",
  padding: "0px 16px",
  maxHeight: "none",
  minHeight: "36px",
  maxWidth: "380px",
  minWidth: "36px",
  position: "relative",
  display: "flex",
  zIndex: 0,
  cursor: "pointer",
  verticalAlign: false,
};

const ElButton = styled.div`
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  box-sizing: border-box;
  text-align: start;
  border-radius: 9999px;
  vertical-align: ${(props) => props.verticalAlign};

  /* ${(props) => (props.margin ? `margin:${props.margin}` : "")} */
  /* ${(props) => (props.height ? `margin:${props.height}` : "")}
  ${(props) => (props.width ? `margin:${props.width}` : "")} // */
  /* position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box; */
`;

export default DivButton;
