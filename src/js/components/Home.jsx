//include images into your bundle
import { Container, Row, Col } from "./Layout";
import zero_thoughts from "../../img/zero_thought.jpg";

//create your first component
const Home = () => {
  return (
    <Container breakpoint="md">
      <Row gx={0} gy={0}>
        <Col
          width={{ col: 3, xs: 12, sm: 6, md: 4 }}
          offset={{ offset: 1, md: 0 }}
        >
          <img style={{ width: "100%", height: "auto" }} src={zero_thoughts} />
        </Col>
        <Col>
          <img style={{ width: "100%", height: "auto" }} src={zero_thoughts} />
        </Col>
        <Col>
          <img style={{ width: "100%", height: "auto" }} src={zero_thoughts} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
