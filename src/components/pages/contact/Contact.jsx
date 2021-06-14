import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Contact.css";
function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Card className="contact-card">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Image
                  src="https://pbs.twimg.com/profile_images/1276640320021766145/Q5rVYo7K_400x400.jpg"
                  roundedCircle
                />
                <Card.Title className="text-white mt-4 fs-2">
                  Didem Gülşen Damlapınar
                </Card.Title>

                <Card.Subtitle className="my-4 text-muted fs-4 ">
                  Frontend Developer
                </Card.Subtitle>
                <Card.Subtitle className="my-4 text-muted fs-3 ">
                  4th-year Computer Engineering student and aspiring front-end
                  developer mainly focused on HTML, CSS, JavaScript, and React,
                  also working towards learning back-end technologies such as
                  Node.js, Express, MongoDB.
                </Card.Subtitle>
                <IconContext.Provider value={{ color: "#fff" }}>
                  <div className="social-media-links">
                    <Link
                      to={"//www.linkedin.com/in/dgdamlapinar/"}
                      target="_blank"
                      aria-label="Linkedin"
                    >
                      <FaLinkedin className="mx-2" size={40} />
                    </Link>

                    <Link
                      to={"//www.github.com/ddamlapinar/"}
                      target="_blank"
                      aria-label="Github"
                    >
                      <FaGithub size={40} />
                    </Link>
                  </div>
                </IconContext.Provider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
