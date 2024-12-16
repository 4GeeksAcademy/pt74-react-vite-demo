//include images into your bundle
import { useState, useEffect } from "react";

import { Container, Row, Col } from "./Layout";
import BookCard from "./BookCard";
import BookForm from "./BookForm";

//create your first component
const Home = () => {
  const [library, setLibrary] = useState([]);

  // Async/await syntax.
  // Async/await allows you to treat asyncronous code as
  // synchronous, i.e. you can await the result of things instead
  // of continuing onwards.
  const getData = async () => {
    const resp = await fetch("https://library.dotlag.space/library");
    const data = await resp.json();
    setLibrary(data.books);
  };

  useEffect(() => {
    // // Promise chaining.
    // console.log("This will log first.");
    // fetch("https://library.dotlag.space/library")
    //   .then((resp) => resp.json())
    //   .then((data) => setLibrary(data.books))
    //   .then(() => console.log("This will happen at the end."));
    // console.log("This will log second.");
    getData();
  }, []);

  const toggleRead = (idx) => {
    let oldBook = library[idx];
    oldBook.have_read = !oldBook.have_read;
    setLibrary(library.toSpliced(idx, 1, oldBook));
  };

  return (
    <Container breakpoint="md">
      {/* <Row>
        <Col>
          <BookForm onSubmit={(book) => setLibrary([book, ...library])} />
        </Col>
      </Row>
      <hr />
      <div className="mt-2"></div> */}
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center gap-3 mt-2">
            {library.map((book, idx) => (
              <BookCard
                book={book}
                key={idx}
                onToggleRead={() => toggleRead(idx)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <div className="mt-2"></div>
    </Container>
  );
};

export default Home;
