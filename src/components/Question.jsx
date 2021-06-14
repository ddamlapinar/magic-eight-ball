import "./Question.css";
import { Col, Button } from "react-bootstrap";

function Question({ inputRef, handleChange, handleSubmit, text }) {
  return (
    <>
      <h2 className="text-white">Ask your question?</h2>
      <form>
        <Col sm={{ span: 6, offset: 3 }}>
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={handleChange}
            className="input my-3"
            placeholder="ask your question"
          />
        </Col>
        <Col sm={{ span: 6, offset: 3 }}>
          <Button className="btn-submit px-3 py-2 my-3" onClick={handleSubmit}>
            Ask
          </Button>
        </Col>
      </form>
    </>
  );
}
export default Question;
