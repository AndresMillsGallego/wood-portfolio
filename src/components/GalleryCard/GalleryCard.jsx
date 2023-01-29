import { Card } from "react-bootstrap";
import SpiralStairs from "../../assets/SpiralStairs.jpg";

const GalleryCard = () => {
  const handleClick = () => {
    alert("Click!");
  };

  return (
    <Card onClick={() => handleClick()}>
      <Card.Header>Header</Card.Header>
      <Card.Img variant="top" src={SpiralStairs} />
      <Card.Body>
        <Card.Title>Title</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GalleryCard;
