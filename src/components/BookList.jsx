import SingleBook from "./SingleBook";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const BookList = ({ books }) => {
  const [selectedword, setSelectedword] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(selectedword.toLowerCase())
  );
  return (
    <>
      <Form className="mb-3" style={{ width: "200px", marginRight: "auto", marginLeft: "auto" }}>
        <Form.Control
          type="text"
          placeholder="Search book..."
          value={selectedword}
          onChange={(e) => setSelectedword(e.target.value)}
        />
      </Form>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
