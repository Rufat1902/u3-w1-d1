import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json' 


const genres = {
  Fantasy: fantasy,
  History: history,
  Horror: horror,
  Romance: romance,
}

const AllTheBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState('Fantasy', 'History', 'Horror', 'Romance')

  return (
    <>
      <Dropdown className="mb-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.keys(genres).map((genre) => (
            <Dropdown.Item key={genre} onClick={() => setSelectedGenre(genre)}>
              {genre}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Row className="g-2">
        {genres[selectedGenre].map((book) => (
          <Col xs={12} md={2} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text style={{ color: 'red' }}>
                  <strong>Price:</strong> {book.price}€
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default AllTheBooks