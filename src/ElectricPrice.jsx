import { useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  return (
    <Container>
      <Head />
      <Body />
      <Footer />
      <LeftSideBar />
      <ErrorModal />
      <Loading />
    </Container>
  );
}

export default ElectricPrice;
