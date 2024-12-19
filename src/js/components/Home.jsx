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
    getData();
  }, []);

  const createBook = async (book) => {
    const resp = await fetch("https://library.dotlag.space/library/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await resp.json();
    setLibrary([...library, data]);
  };

  const toggleRead = async (book) => {
    const resp = await fetch(
      `https://library.dotlag.space/library/${book.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...book,
          have_read: !book.have_read,
        }),
      }
    );

    const data = await resp.json();

    setLibrary(
      library.toSpliced(
        library.findIndex((library_book) => library_book.id === book.id),
        1,
        data
      )
    );
  };

  const deleteBook = async (book) => {
    const resp = await fetch(
      `https://library.dotlag.space/library/${book.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setLibrary(
      library.toSpliced(
        library.findIndex((library_book) => library_book.id === book.id),
        1
      )
    );
  };

  return (
    <Container breakpoint="md">
      <Row>
        <Col>
          <BookForm onSubmit={(book) => createBook(book)} />
        </Col>
      </Row>
      <hr />
      <div className="mt-2"></div>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center gap-3 mt-2">
            {library.map((book) => (
              <BookCard
                book={book}
                key={book.id}
                onToggleRead={() => toggleRead(book)}
                onDelete={() => deleteBook(book)}
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
