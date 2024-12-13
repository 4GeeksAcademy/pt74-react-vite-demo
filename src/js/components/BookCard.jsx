import "./BookCard.css";

const BookCard = ({ book, onToggleRead }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4">
          <img
            src={book.cover}
            className="img-fluid rounded-start book-cover"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle">{book.author}</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Pages:</strong> {book.num_pages}
              </li>
              <li className="list-group-item">
                <strong>Published:</strong> {book.year_published}
              </li>
              <li className="list-group-item">
                <strong>Is this book awesome:</strong>{" "}
                {book.is_awesome ? "Yes." : "No. :("}
              </li>
              {book.have_read ? (
                <button className="btn btn-success" onClick={onToggleRead}>
                  I've read this!
                </button>
              ) : (
                <button className="btn btn-warning" onClick={onToggleRead}>
                  I have not read this (yet.) :(
                </button>
              )}
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
