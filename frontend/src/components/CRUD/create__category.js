import React, { useState } from "react";
import axios from "axios";
import "./create.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CreateCategory() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const categoryObject = {
      title: title,
    };
    console.log("categoryObject",categoryObject)
    axios
      .post("http://localhost:4001/api/management/categories/create-category", categoryObject)
      .then((data) => console.log(data))
      .catch(
        (error) => {
          console.log(error);
          navigate('/')
        },
        [title]
      );
  };

  return (
    <div className="form__wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label className="form_label">title</Form.Label>
          <Form.Control type="text" value={title} onChange={onChangeTitle} />
        </Form.Group>
        <Button
          variant="danger"
          size="lg"
          block="block"
          type="submit"
          className="mt-4"
        >
          Create Category
        </Button>
      </Form>
    </div>
  );
}

export default CreateCategory;