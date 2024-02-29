import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col>
            <img src="/img/app.jpeg" alt="elektrikell" />
          </Col>
          <Col>
            <h2>Electricity Price Tracker</h2>
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
                <b>React: </b>Utilized for building the user interface of the
                application, providing efficient rendering and management of
                search functionalities.
              </li>
              <li>
                <b> Forms: </b>React Forms are employed for creating and
                processing search criteria, allowing users to specify date and
                time parameters for retrieving electricity price data.
              </li>
              <li>
                <b> Hooks:</b> React Hooks are utilized to manage state and side
                effects related to search queries and data retrieval, enhancing
                the functionality and responsiveness of the app.
              </li>
              <li>
                <b>Context API: </b>The Context API manages global state related
                to search parameters and electricity price data, ensuring
                seamless communication between components.
              </li>
              <li>
                <b>React Router:</b> React Router handles client-side routing,
                enabling navigation between search results and other views
                within the application.
              </li>
              <li>
                <b>Redux:</b> Redux is used for managing global state and
                facilitating predictable state management across the
                application, particularly useful for handling complex data
                interactions and maintaining consistency.
              </li>
              <li>
                <b>Recharts:</b> Recharts is employed for data visualization,
                particularly for rendering interactive charts and graphs to
                display electricity price data in an intuitive and informative
                manner.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="about-links gap-3 my-5 justify-content-center">
          <Link to="me" className="custom-button col-3 ">
            About me
          </Link>
          <Link to="gamma" className="custom-button col-3">
            About gamma
          </Link>
          <Link to="contact-form" className="custom-button col-3">
            Your feedback
          </Link>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

export default About;
