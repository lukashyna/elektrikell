import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
function About() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Project Goal: Electricity Price Tracker</h2>
            The goal of the "Electricity Price Tracker" project is to provide
            users with a tool for efficiently monitoring real-time electricity
            prices. Users can search by date and time, receive recommendations
            on the most cost-effective timeframes for electricity usage, and
            analyze consumption history. The primary objective of the project is
            to assist users in making informed decisions about their energy
            consumption, aiming to optimize costs and improve financial
            performance. By offering an accessible and user-friendly platform,
            the project seeks to enhance users' awareness and energy efficiency,
            promoting resource conservation and reducing environmental impact.
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Technologies Used:</h2>
            <ul>
              <li>
                React: The application leverages React for its user interface
                components, enabling efficient rendering and management of
                search functionalities.
              </li>
              <li>
                Forms: React Forms facilitate input and processing of search
                criteria, allowing users to specify date and time parameters for
                retrieving electricity price data.
              </li>
              <li>
                Hooks: React Hooks are utilized to manage state and side effects
                related to search queries and data retrieval, enhancing the
                functionality and responsiveness of the app.
              </li>
              <li>
                Hooks: React Hooks are utilized to manage state and side effects
                related to search queries and data retrieval, enhancing the
                functionality and responsiveness of the app.
              </li>
              <li>
                Context API: The Context API manages global state related to
                search parameters and electricity price data, ensuring seamless
                communication between components.
              </li>
              <li>
                React Router: React Router handles client-side routing, enabling
                navigation between search results and other views within the
                application.
              </li>
            </ul>
          </Col>
        </Row>
        <Link to="me" className="btn btn-info">
          About me
        </Link>
        <Link to="gamma" className="btn btn-info">
          About gamma
        </Link>
        <Link to="contact-form" className="btn btn-info">
          Contact form
        </Link>
      </Container>
      <Outlet />
    </>
  );
}

export default About;
