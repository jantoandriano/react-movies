import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/API";

// Components
import Button from "../Button";

// Styles
import { Wrapper, Input, Form } from "./login.styles";

// Context
import { Context } from "../../context/context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      setUser({ sessionId: sessionId.session_id, username });
      localStorage.setItem("sessionId", sessionId.session_id);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <>
      <Wrapper>
        {error && <div className="error">There was an error!</div>}

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleInput}
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
          <Button type="login" callback={handleSubmit}>
            Login
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
