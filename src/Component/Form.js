import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

import { v4 as uuid } from "uuid";

function App({ setstate, editState,  setUpdateState }) {
  // debugger;
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editState !== {}) {
      setUserInput(editState);
    }
  }, [editState]);

  const [error, setError] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const checkValidation = (value) => {
    let nameError = "";
    let phoneError = "";
    let emailError = "";

    const { name, email, phone } = userInput;
    const regexString = new RegExp(/^\S[a-zA-Z\s]+$/);
    if (regexString.test(name) === false || name === "") {
      nameError = "Please enter valid name";
    }

    const regexNumber = new RegExp(/^[1-9]\d{9}/);
    if (regexNumber.test(phone) === false || phone === "") {
      phoneError = "Please enter valid Phone Number";
    }

    const regexEmail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if (regexEmail.test(email) === false || email === "") {
      emailError = "Please enter valid email id";
    }

    if (nameError || emailError || phoneError) {
      setError({ nameError, emailError, phoneError });
      return false;
    }
    return true;
  };
  const Submit = (e) => {
    e.preventDefault();
    // debugger
    if (checkValidation()) {
      if (editState !== "") {
        
        setUpdateState(userInput);
        navigate("/User");
      } else {
        userInput["id"] = uuid();
        setstate((prev) => {
          return [...prev, userInput];
        });
      }
      alert("Submitted");
      setUserInput({
        name: "",
        email: "",
        phone: "",
      });
      setError({
        nameError: "",
        phoneError: "",
        emailError: "",
      });

      // Location.href="/User"
    }
  };

  return (
    <>
      {
        <>
          <h2>Fill user values</h2>
          <Form onSubmit={Submit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                contentEditable={true}
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={change}
                value={userInput.name}
              />
            </Form.Group>
            <h6 style={{ color: "red" }}>{error.nameError}</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                contentEditable={true}
                type="email"
                name="email"
                placeholder="Enter email"
                value={userInput.email}
                onChange={change}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <h6 style={{ color: "red" }}>{error.emailError}</h6>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                contentEditable={true}
                type="phone"
                name="phone"
                placeholder="Enter phone number"
                value={userInput.phone}
                onChange={change}
              />
              <h6 style={{ color: "red" }}>{error.phoneError}</h6>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </>
      }
    </>
  );
}

export default App;
