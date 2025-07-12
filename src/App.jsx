import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";

import "./App.css"

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: Date.now(),
        value: input.trim(),
      };
      setList([...list, newItem]);
      setInput("");
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (index) => {
    //TODO: Create custom pop-up for editing
    const editedTodo = prompt("Edit the todo:", list[index].value);
    if (editedTodo && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo.trim();
      setList(updatedList);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <h1 className="text-center fw-bold">TODO LIST</h1>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="Add item"
              size="lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="dark" onClick={addItem}>
              ADD
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex flex-wrap justify-content-between align-items-center"
                variant="secondary"
              >
                <span className="flex-grow-1 me-3 word-break">
                  {item.value}
                </span>
                <div>
                  {/*TODO: Make buttons to be in the same spot independently of text length*/}
                  <Button
                    variant="light"
                    size="sm"
                    className="me-2"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
