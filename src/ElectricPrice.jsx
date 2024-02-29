import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { setActiveHour } from "./services";
import { ElectricPriceProvider } from "./contexts";
import "./App.scss";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  return (
    <ElectricPriceProvider>
      <Container>
        <Head />
        <Body />
      </Container>
      <Footer />
      <LeftSideBar />
      <ErrorModal />
      <Loading />
    </ElectricPriceProvider>
  );
}

export default ElectricPrice;
