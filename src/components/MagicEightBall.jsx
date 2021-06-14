import React, { useState, useEffect, useRef } from "react";
import Question from "./Question";
import Answer from "./Answer";
import { Container } from "react-bootstrap";

function MagicEightBall() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [question, setQuestion] = useState("");
  const [isQuestion, setIsQuestion] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [question]);

  const fetchData = () =>
    fetch("https://yesno.wtf/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      })

      .catch((error) => console.error(error));

  function handleSubmit(e) {
    e.preventDefault();
    setQuestion(text);
    checkQuestion(text);
  }
  function checkQuestion(question) {
    if (question.length > 1 && question.endsWith("?")) {
      setIsQuestion(true);
    } else {
      setIsQuestion(false);
    }
  }
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  return (
    <>
      <Container className="text-center">
        <h1 className="text-white mt-5 mb-3">Magic Eight Ball</h1>

        <Question
          inputRef={inputRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div>
          <div>
            {!isQuestion && (
              <h1 className="text-white">You didn't ask a question </h1>
            )}
          </div>
          {isQuestion && <h1 className="text-white">{question}</h1>}
        </div>
      </Container>

      {question && isQuestion ? (
        <Answer answer={data.answer} isLoading={isLoading} image={data.image} />
      ) : (
        ""
      )}
    </>
  );
}
export default MagicEightBall;
