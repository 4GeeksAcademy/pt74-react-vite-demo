import "./BookCard.css";

const BookCard = ({ book, onToggleRead }) => {
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-4">
          <img
            src={book.cover}
            class="img-fluid rounded-start book-cover"
            alt="..."
          />
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 className="card-subtitle">{book.author}</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Pages:</strong> {book.num_pages}
              </li>
              <li class="list-group-item">
                <strong>Published:</strong> {book.year_published}
              </li>
              <li class="list-group-item">
                <strong>Is this book awesome:</strong> Yes.
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
              <li class="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
