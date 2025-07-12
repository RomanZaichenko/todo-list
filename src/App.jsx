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

  const addItem = (item) => {
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
}