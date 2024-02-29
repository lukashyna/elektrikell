import { Form, Button, FloatingLabel } from "react-bootstrap";
import * as FormData from "form-data";
import Mailgun from "mailgun.js";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = process.env.REACT_APP_PRIVATE_API_KEY;
    const domain = process.env.REACT_APP_MAILGUN_DOMAIN;

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: apiKey || "key-yourkeyhere",
    });

    const data = {
      from: `Excited User  <emily.smith9793@gmail.com>`,
      to: "anastasiia.lukashyna@gmail.com",
      subject: "Hello",
      text: `${event.target.name.value}, ${event.target.email.value}, ${event.target.message.value}`,
    };

    const messageElement = document.getElementsByClassName(
      "contact-form_message"
    )[0];

    mg.messages
      .create(domain, data)
      .then((msg) => {
        messageElement.innerHTML = "Your message has been sent successfully!";
        event.target.reset();
      })
      .catch((error) => {
        messageElement.innerHTML =
          "An error occurred while sending your message. Please try again later.";
      });
    event.target.reset();
  };

  return (
    <div>
      <h2>Your feedback</h2>
      <div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="email" label="Your email" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="name" label="Your name" className="mb-3">
            <Form.Control type="text" name="name" placeholder="Name" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="message"
            label="Your message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Message"
              name="message"
              required
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="contact-form_message d-inline-block p-4"></div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
