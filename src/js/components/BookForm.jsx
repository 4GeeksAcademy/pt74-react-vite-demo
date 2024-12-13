import { useState } from "react";
import BookCard from "./BookCard";

const BookForm = ({ onSubmit }) => {
  const [testBook, setTestBook] = useState({
    cover: "https://placehold.co/200x300",
    title: "Test Book",
    author: "Writer McAuthorson",
    num_pages: -500,
    year_published: 5321,
    isbn13: "978-0-111-12345-6",
    isbn10: "0-111-12345-6",
    is_awesome: true,
    have_read: false,
  });

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-center gap-3 mt-2">
            <BookCard book={testBook} />
          </div>
        </div>
      </div>
      <div className="row">
        <form
          className="col"
          onSubmit={(ev) => {
            ev.preventDefault();
            onSubmit(testBook);
            setTestBook({
              cover: "https://placehold.co/200x300",
              title: "Test Book",
              author: "Writer McAuthorson",
              num_pages: -500,
              year_published: 5321,
              isbn13: "978-0-111-12345-6",
              isbn10: "0-111-12345-6",
              is_awesome: true,
              have_read: false,
            });
          }}
        >
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Title"
                aria-label="title"
                value={testBook.title}
                onChange={(ev) =>
                  setTestBook({
                    ...testBook,
                    title: ev.target.value,
                  })
                }
              ></input>
            </div>
            <div className="col">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Author"
                aria-label="author"
                value={testBook.author}
                onChange={(ev) =>
                  setTestBook({
                    ...testBook,
                    author: ev.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg"
                type="number"
                placeholder="Number of pages"
                aria-label="pages"
                value={testBook.num_pages}
                onChange={(ev) =>
                  setTestBook({
                    ...testBook,
                    num_pages: ev.target.valueAsNumber,
                  })
                }
              ></input>
            </div>
            <div className="col">
              <input
                className="form-control form-control-lg"
                type="number"
                placeholder="Year published"
                aria-label="published"
                value={testBook.year_published}
                onChange={(ev) =>
                  setTestBook({
                    ...testBook,
                    year_published: ev.target.valueAsNumber,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bookIsAwesome"
                  checked={testBook.is_awesome}
                  onChange={(ev) =>
                    setTestBook({
                      ...testBook,
                      is_awesome: ev.target.checked,
                    })
                  }
                />
                <label className="form-check-label" htmlFor="bookIsAwesome">
                  Is this book awesome?
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bookIsRead"
                  checked={testBook.have_read}
                  onChange={(ev) =>
                    setTestBook({
                      ...testBook,
                      have_read: ev.target.checked,
                    })
                  }
                />
                <label className="form-check-label" htmlFor="bookIsRead">
                  Have I read this book?
                </label>
              </div>
            </div>
            <div className="col">
              <button className="btn btn-primary">
                Add This Book To The Library
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  setTestBook({
                    cover: "https://placehold.co/200x300",
                    title: "Test Book",
                    author: "Writer McAuthorson",
                    num_pages: -500,
                    year_published: 5321,
                    isbn13: "978-0-111-12345-6",
                    isbn10: "0-111-12345-6",
                    is_awesome: true,
                    have_read: false,
                  })
                }
              >
                Clear form.
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookForm;
