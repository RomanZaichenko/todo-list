import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup"


function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const addItem = () => {
    if (input !== "") {
      const userInput ={
        id: Math.random(),
        value: input
      }

      const updatedList = [...list];
      updatedList.push(userInput)

      setList(updatedList)
      setInput("")
    }
  }

  const removeItem = (key) => {
    const listToOperate = [...list];
    const updatedList = listToOperate.filter((item) => item[key] !== key);

    setList(updatedList)
  }

  const editItem = (index) => {
    const todos = [...list];

    //TODO: Create custom pop-up for editing
    const editedTodo = prompt('Edit the todo');

    if (editedTodo !== null && editedTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;

      setList(updatedTodos)
    }
  }

  return (
    <Container>
      <Row style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        fontWeight: 'bolder'
      }}>
        TODO LIST
      </Row>

      <hr/>

      <Row>
        <Col md={{span: 5, offset: 4}}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add item"
              size="lg"
              value={input}
              onChange={(item) => setInput(item.target.value)}
              aria-label="Add something"
              aria-describedby="basic-addon2" />
            <InputGroup>
              <Button
                variant="dark"
                className="mt-2"
                onClick={() => {addItem()}}
              >
                ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 5, offset: 4}}>
          <ListGroup>
            {list.map((item, index) => {
              return (
                <div key={index}>
                  <ListGroup.Item
                    variant="dark"
                    action
                    style={{display: 'flex', justifyContent: 'space-between'}}
                  >
                    {item.value}
                    <span>
                      <Button style={{marginRight: '10px'}}
                              variant="light"
                              onClick={() => {removeItem(item.id)}}
                      >
                        Remove
                      </Button>
                      <Button variant="light"
                              onClick={() => {removeItem(item.id)}}
                      >
                        Edit
                      </Button>
                    </span>
                  </ListGroup.Item>
                </div>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default App