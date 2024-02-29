import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

function AboutMe() {
  const location = useLocation();

  return (
    <>
      <Container>
        <Row>
          <Col className="mb-5" style={{ minHeight: "400px" }}>
            {location.pathname === "/about/me" && (
              <div>
                <h2>Anastasiia Lukashyna</h2>
                <h3>Front End Developer</h3>
                <p>
                  As a Front End Developer, I specialize in HTML5, CSS3,
                  Wordpress, JavaScript, and React.js. Since 2020, I've been
                  actively involved in creating templates, focusing on
                  delivering high-quality results. I thrive in both individual
                  and team settings, with a strong commitment to achieving
                  goals.
                </p>
                <h4> Technical Skills</h4>
                <ul>
                  <li>
                    <b>Technologies:</b> HTML5, CSS3, SAAS
                  </li>
                  <li>
                    <b>Frameworks and Libraries: </b>React.js, Node.js, jQuery
                  </li>
                  <li>
                    <b>CMS:</b> Wordpress (WooCommerce, Crocoblock, Elementor,
                    Elementor Pro)
                  </li>
                  <li>
                    <b>DevTools:</b> Git, Chrome DevTools, Jira
                  </li>
                  <li>
                    <b>Programming Languages:</b> JavaScript
                  </li>
                  <li>
                    <b>Design Tools:</b> Photoshop, Figma
                  </li>
                </ul>
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
            {location.pathname === "/about/contact-form" && <ContactForm />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
