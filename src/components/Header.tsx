import { LoginOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { login } from "react-frontend-library";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      // Store the token in a secure way (e.g., secure cookie or local storage)
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      // Redirect or show success message
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleSubmit = () => {
    if (register) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
    setEmail("");
    setPassword("");
    login({ handler: handleLogin});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let title = "Log-In";
  if (register) {
    title = "Sign-Up";
  }
  return (
    <div className="shadow-2xl bg-sky-500 border-b border-sky-500 p-3 w-full flex fixed z-20">
      <a className="mx-auto text-white h-10 text-2xl align-baseline" href="/">
        The Retreat
      </a>
      <Button
        type="primary"
        onClick={showModal}
        className="bg-blue-500 flex items-center"
      >
        <LoginOutlined />
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleLogin}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Abbrechen</Button>,
          <Button
            disabled={email == "" || password == ""}
            onClick={handleSubmit}
          >
            Anmelden
          </Button>,
        ]}
      >
        {!register && (
          <div>
            <Input
              placeholder="Email"
              value={email}
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              className="mt-6"
              value={password}
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center">
              <p>Ich habe noch keinen Account.&nbsp;</p>
              <a onClick={() => setRegister(true)} className="text-blue-500">
                Hier Registrieren!
              </a>
            </div>
          </div>
        )}
        {register && (
          <div>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              className="mt-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center">
              <p>Ich habe bereits einen Account.&nbsp;</p>
              <a onClick={() => setRegister(false)} className="text-blue-500">
                Hier Anmelden!
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Header;
