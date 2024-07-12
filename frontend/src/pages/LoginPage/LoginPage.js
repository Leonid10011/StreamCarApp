import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginUser } from "services/api";
import { useUserData } from "context/useUserData";
import "./LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken, loggedIn } = useUserData();
  const [isGuest, setIsGuest] = useState(false);

  // login user with hardcoded email, because we only have 2 options for now
  const handleLogin = async () => {
    try {
      let res;
      console.log("IsGuest: ", isGuest);
      if (isGuest) {
        res = await loginUser("guest@example.com", password);
      } else {
        res = await loginUser("leonid.budkov@gmail.com", password);
      }

      localStorage.setItem("token", res.token);
      setToken(res.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGuest = (e) => {
    setIsGuest(e.target.checked);
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Container fluid>
      <Col className="d-flex justify-content-center">
        <Form className="w-50 p-5 m-5">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Group className="d-flex">
              <Form.Label className="checkbox-label">Gast?</Form.Label>
              <Form.Check className="custom-checkbox" onChange={handleGuest} />
            </Form.Group>
            <Form.Group className="d-flex">
              <Form.Label column md="2" className="text-light">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form.Group>
          <Row className="d-flex align-items-center">
            <Button onClick={handleLogin} className="btn-lg">
              Login
            </Button>
          </Row>
        </Form>
      </Col>
    </Container>
  );
};

export default LoginPage;
