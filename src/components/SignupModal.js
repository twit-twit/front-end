import React from "react";
// import Modal from "react-awesome-modal"
import { Modal, Button } from "react-bootstrap";
import { Text, TextBox, DivButton, input, Grid } from "../elements/Index";

const SignupModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Grid is_flex>
        <Grid is_flex>
          <Grid>
            <Grid is_flex>
              <Modal.Header closeButton />
            </Grid>
          </Grid>
          <img
            src={require("../static/images/twit_logo.jpg")}
            width="90px"
            alt=""
          />
          <Grid />
        </Grid>
      </Grid>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          계정을 생성하세요
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
