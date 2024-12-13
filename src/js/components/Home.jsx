//include images into your bundle
import { useState } from "react";

import { Container, Row, Col } from "./Layout";
import BookCard from "./BookCard";
import BookForm from "./BookForm";

//create your first component
const Home = () => {
  const [library, setLibrary] = useState([
    {
      title: "Something Wicked This Way Comes",
      author: "Ray Bradbury",
      cover: "https://pictures.abebooks.com/isbn/9780553136951-us.jpg",
      num_pages: 293,
      year_published: 1997,
      isbn13: "978-0-380-72940-1",
      isbn10: "0-380-72940-7",
      is_awesome: true,
      have_read: false,
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL._SY522_.jpg",
      num_pages: 383,
      year_published: 1970,
      isbn13: null,
      isbn10: "0-380-01503-X",
      is_awesome: true,
      have_read: false,
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      cover:
        "https://i5.walmartimages.com/seo/Snow-Crash-Hardcover-9780613361620_f11eea3c-5e60-4a1b-936b-67c9c4455e27_1.0a9c061d4600a35fb739ad85e9e9aa06.jpeg",
      num_pages: 470,
      year_published: 1992,
      isbn13: "978-061336162",
      isbn10: null,
      is_awesome: true,
      have_read: false,
    },
    {
      title: "The Ultimate Hitchiker's Guide To The Galaxy",
      author: "Douglas Adams",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg",
      num_pages: 815,
      year_published: 2002,
      isbn13: "978-0-645-45374-7",
      isbn10: null,
      is_awesome: true,
      have_read: false,
    },
  ]);

  const toggleRead = (idx) => {
    let oldBook = library[idx];
    oldBook.have_read = !oldBook.have_read;
    setLibrary(library.toSpliced(idx, 1, oldBook));
  };

  return (
    <Container breakpoint="md">
      <Row>
        <Col>
          <BookForm onSubmit={(book) => setLibrary([book, ...library])} />
        </Col>
      </Row>
      <hr />
      <div className="mt-2"></div>
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
