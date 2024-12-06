const BookCard = ({ book }) => {
  // Style is an object in React, and not a string.
  const style = { width: "45%" };

  return (
    <div className="card mb-3" style={style}>
      {/* Self-closing tags MUST have the trailing forward slash. */}
      <img className="card-img-top" src={book.cover} alt="" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {book.author}
        </h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Pages:</strong> {book.num_pages}
          </li>
          <li className="list-group-item">
            <strong>Published:</strong> {book.year_published}
          </li>
          <li className="list-group-item">
            <strong>ISBN-10:</strong> {book.isbn10 ? book.isbn10 : "N/A"}
          </li>
          <li className="list-group-item">
            <strong>ISBN-13:</strong> {book.isbn13 ? book.isbn13 : "N/A"}
          </li>
          <li className="list-group-item">
            <strong>Is this book awesome:</strong>
            {book.is_awesome ? " Yes" : " No"}.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;
