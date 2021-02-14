import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Anna = () => {
  return (
    <>
      {/* <Card className="bg-dark text-dark">
        <Card.Img style={{width: "100vw", height: "auto", margin: "auto"}} src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12189008_10153737222163944_630940329092161680_n.jpg?_nc_cat=110&ccb=3&_nc_sid=174925&_nc_ohc=tFof--HZRXcAX9cr-he&_nc_ht=scontent-mad1-1.xx&oh=2d56d6dc293a108b92d0dd4e24edec4e&oe=604D6115" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Anna Ferran</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos optio eligendi, quae pariatur incidunt voluptates quo officia adipisci possimus a! Magnam debitis corrupti expedita natus laborum saepe ab? Fuga, aliquid!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate odio obcaecati impedit nam officiis similique esse aliquam. Debitis dolore doloribus consequatur suscipit aliquam id porro dolores sint! Voluptatem, cumque dolorum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit! Animi quia ducimus delectus, officia consequuntur illum laboriosam expedita aliquam dolor ea porro. Aliquam eum voluptates fugit aut nulla excepturi!
          </Card.Text>
          <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit! Animi quia ducimus delectus, officia consequuntur illum laboriosam expedita aliquam dolor ea porro. Aliquam eum voluptates fugit aut nulla excepturi!</Card.Text>
        </Card.ImgOverlay>
      </Card> */}
      <Card style={{ width: '60vw', margin: "auto"}}>
  <Card.Img variant="top" src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12189008_10153737222163944_630940329092161680_n.jpg?_nc_cat=110&ccb=3&_nc_sid=174925&_nc_ohc=tFof--HZRXcAX9cr-he&_nc_ht=scontent-mad1-1.xx&oh=2d56d6dc293a108b92d0dd4e24edec4e&oe=604D6115" />
  <Card.Body >
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </>
  );
};

export default Anna;
