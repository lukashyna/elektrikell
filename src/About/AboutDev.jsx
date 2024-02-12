import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function AboutMe() {
  const location = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            {location.pathname === "/about/me" && (
              <div>
                <h2>About Me</h2>
                <div>
                  I'm Anastasiia Lukashyna, Frontend Developer focusing on HTML
                  5, CSS 3, WordPress, JavaScript, and React. I've been creating
                  templates since 2020. I'm goal-oriented, able to work
                  efficiently both individually and in a team. I have a strong
                  willingness to learn, and delivering results is important to
                  me.
                </div>
              </div>
            )}
            {location.pathname === "/about/gamma" && (
              <div>
                <h2>Gamma Intelligence Training Centre</h2>
                <div>
                  Since July 2020, the Gamma Intelligence Training Centre has
                  been conducting courses aimed at preparing specialists in the
                  field of cutting-edge digital technologies, including software
                  development, implementation of digital technologies,
                  automation and optimization of business processes, machine
                  learning, data analysis, and computer modeling.
                </div>
              </div>
            )}
            {location.pathname === "/about/contact-form" && (
              <div>
                <h2>Contact form</h2>
                <div>
                  <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="email"
                      label="Your email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="name"
                      label="Your name"
                      className="mb-3"
                    >
                      <Form.Control type="textaria" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="message"
                      label="Your message"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
