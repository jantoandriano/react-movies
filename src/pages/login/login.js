import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../API/API";

// Components
import Button from "../../components/Button";

// Styles
import { Wrapper, Input, Form } from "./styles/login.styles";

// Context
import { Context } from "../../contexts/context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      toast("Use jantoandriano || Janto2793 to login");
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
