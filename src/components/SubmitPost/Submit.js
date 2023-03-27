import React, {useState} from "react";
import {Editor, EditorState} from 'draft-js';
import { Button, Modal, Form } from "react-bootstrap";
import MyEditor from "./myEditor"
import Feed from "../Feed"
import "./styles.css"


export default function Submit() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
    
  const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Submit Post
        </Button> */}
       {/* <Feed /> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit your own post</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="" />
    <Form.Label>Link</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    {/* <Form.Control as="textarea" rows={3} /> */}

    <MyEditor />
 
   
  </Form.Group>
</Form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }