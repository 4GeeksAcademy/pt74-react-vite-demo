//include images into your bundle
import { Container, Row, Col } from "./Layout";
import zero_thoughts from "../../img/zero_thought.jpg";
import Timer from "./Timer";
import { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";

//create your first component
const Home = () => {
  // We need some way to store a value that when it changes,
  // React cares about it.
  const [value, setValue] = useState(0);

  // We need some way to start a useInterval safely
  // e.g. It needs to start once, instead of once every
  // time the component re-renders.
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(`Value is: ${value}`);
    // if (value == 30) {
    //   alert("Ding!");
    // }
  }, [value]);

  // We need to convert a number without leading zeros
  // into a string of the correct length with leading zeros.
  // e.g. 1000 ==> "01000"

  return (
    <Container breakpoint="md">
      <Row>
        <Col>
          <Timer value={value.toString().padStart(5, "0")} />
        </Col>
      </Row>
      <Row>
        <Col>
          <VolumeSlider />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
