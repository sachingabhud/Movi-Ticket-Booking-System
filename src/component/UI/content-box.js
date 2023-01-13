import Card from 'react-bootstrap/Card';
function ContentBox(props){
    const {height,width,title,obj} = props;
    const renderList = obj.map((item, index) => 
      <div>
        <b>{item.ticket_count}</b> Tickets for <b>{item.show_name}</b>
        <br/>
        Booked by <b>{item.name}</b>
        <br/>
        <br/>
      </div>
  );
    return (
        <div>
        <Card border="primary" style={{ width: "46rem", height:"30rem"}}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Text>
                  {renderList}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>  
    );
}

export default ContentBox;