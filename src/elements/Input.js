import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./Index";

const Input = (props) => {
  const { label, placeholder, borderRadius, _onChange, type, multiLine, name } = props;

  const styles = {
    borderRadius: borderRadius,
  };

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea rows={10} placeholder={placeholder} onChange={_onChange}></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput name={name} {...styles} type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력하세요",
  _onChange: () => {},
  type: "type",
  borderRadius: "5px",
  name: "name",
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: ${(props) => props.borderRadius};
`;

export default Input;
