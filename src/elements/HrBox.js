import React from "react";
import styled from "styled-components";

const HrBox = (props) => {
  const {} = props;

  const styles = {};

  return (
    <React.Fragment>
      <Hr {...styles} />
    </React.Fragment>
  );
};

const Hr = styled.div`
  height: 1px;
  width: 108px;
  background-color: rgb(47, 51, 54);
  display: flex;
`;

export default HrBox;
