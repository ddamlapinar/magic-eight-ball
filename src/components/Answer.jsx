import Image from "./Image";
import { Container, Col, Spinner } from "react-bootstrap";
function Answer({ answer, image, isLoading }) {
  return (
    <Container>
      <Col>
        <div className="d-flex  justify-content-center">
          <p className="text-white">{answer.toUpperCase()}</p>
        </div>
      </Col>
      <Col className=" d-flex justify-content-center">
        {isLoading ? (
          <Image image={image} />
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Col>
    </Container>
  );
}
export default Answer;
