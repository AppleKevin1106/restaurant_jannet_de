import React, { useEffect, useState } from "react";
import axios from "axios";
import "./create.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateElement() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState()

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeCount = (e) => {
    setCount(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/api/management/categories")
      .then((res) => {
        console.log(res)
        setList(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  const [list, setList] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();
    const elementObject = {
      title: title,
      description: description,
      price: price,
      count: count,
      category: category
    };
    axios
      .post("http://localhost:4001/api/management/elements/create-element", elementObject)
      .then((data) => console.log(data))
      .catch(
        (error) => {
          console.log(error);
        },
        [title, description, price, count, category]
      );
  };

  return (
    <div className="form__wrapper">
      <Form onSubmit={onSubmit}>
        <h2>Create element</h2>

        <Form.Group controlId="element">
            <Form.Label className="form-label">List</Form.Label>
            <select onChange={onChangeCategory} id="select1"  placeholder="selecet category">
              {
                list?.map((data, index)=> {
                  return (
                      <option key={index} value={data._id}>
                        {data.title}
                      </option>
                  )
                })
              }
            </select>
          </Form.Group>

        <Form.Group controlId="title">
          <Form.Label className="form_label">title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="form__label">description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={onChangeDescription}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label className="form__label">price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={onChangePrice}
          />
        </Form.Group>

        <Form.Group controlId="count">
          <Form.Label className="form__label">count</Form.Label>
          <Form.Control
            type="number"
            value={count}
            onChange={onChangeCount}
          />
        </Form.Group>

        <Button
          variant="danger"
          size="lg"
          block="block"
          type="submit"
          className="mt-4"
        >
          Create Element
        </Button>
      </Form>
    </div>
  );
}

export default CreateElement;
