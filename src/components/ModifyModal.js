import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/post";
import { Text, TextBox, DivButton, Input, Grid, HrBox } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/post";

const ModifyModal = ({show, onHide, _onClick }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">어떤 것을 할까요?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Grid is_center>
              <DivButton is_center width="auto" margin="auto">
                수정하기
              </DivButton>
            </Grid>
            <Grid is_center>
              <DivButton
                is_center
                width="auto"
                margin="16px auto 0px auto"
                _onClick={_onClick}
              >
                삭제하기
              </DivButton>
            </Grid>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModifyModal;
