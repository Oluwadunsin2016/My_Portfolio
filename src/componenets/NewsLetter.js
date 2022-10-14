import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

export const NewsLetter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearField();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const clearField = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subcribe to our Newsletter <br /> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "success" && <Alert variant="success">message</Alert>}
            {status === "error" && <Alert variant="danger">message</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subcribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
