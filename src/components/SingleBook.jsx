import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function SingleBook(props) {
  return (
    <Card style={{ width: '18rem', marginRight: 'auto', marginLeft: 'auto', marginTop: '2em' }}>
        <Card.Body>
    {props.book.img ? <CardImg src={props.book.img} alt={props.book.title} /> : 'No image available'}
        <Card.Title style={{marginTop: '1em'}}>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;