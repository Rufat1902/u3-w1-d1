// import { CardImg } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

// function SingleBook(props) {
//   return (
//     <Card style={{ width: '18rem', marginRight: 'auto', marginLeft: 'auto', marginTop: '2em' }}>
//         <Card.Body>
//     {props.book.img ? <CardImg src={props.book.img} alt={props.book.title} /> : 'No image available'}
//         <Card.Title style={{marginTop: '1em'}}>{props.book.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// }

// export default SingleBook;

import { Component } from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { img, title } = this.props.book;

    return (
      <Card
        onClick={this.toggleSelect}
        style={{
          width: '18rem',
          margin: '2em auto',
          border: this.state.selected ? '3px solid red' : '1px solid lightgray',
          cursor: 'pointer',
        }}
      >
        <Card.Body>
          {img ? (
            <CardImg src={img} alt={title} />
          ) : (
            'No image available'
          )}
          <Card.Title >{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;