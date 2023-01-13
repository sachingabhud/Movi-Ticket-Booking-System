import Card from 'react-bootstrap/Card';
function CartBox(props){
    const {title,count,total} = props;
    return (
        <div>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Title>{count}</Card.Title>
            <Card.Text>
              {total}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CartBox;