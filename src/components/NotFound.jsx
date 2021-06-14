import React from "react";
import { Container } from "react-bootstrap";
function NotFound() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className="text-white mt-5">404 Not Found</h1>

        <h2 className="text-white">Something went wrong</h2>
      </Container>
    </>
  );
}
export default NotFound;
