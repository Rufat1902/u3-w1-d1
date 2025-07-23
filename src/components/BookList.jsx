import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default BookList;