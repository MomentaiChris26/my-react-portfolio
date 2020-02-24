import React, { Component } from "react";
import AccioCuriosImage from '../images/acciocurios.png'
import WeExploreImage from '../images/weexploreimage.png'
import {
  Container,
  CardDeck,
  Card,
  Button,
  ButtonGroup
} from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <Container className="mt-3 mb-3" id="projects">
        <h1>Recent Projects</h1>
        <CardDeck>
          <Card className="cardStyle">
            <Card.Img
              variant="top"
              src={WeExploreImage}
            />
            <Card.Body>
              <Card.Title>WeExplore Health & Fitness</Card.Title>
              <Card.Text>
                This application was built using MERN stack. The app is designed
                for the client to create and management events and allow users
                to sign up to attend these events.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup className="d-flex" size="md">
                <Button
                  variant="dark"
                  href="https://weexplorehealthandlifestyle.netlify.com/"
                  target="_blank"
                >
                  <i className="fas fa-link"></i>
                </Button>
                <Button
                  href="https://github.com/MERNStars/frontend"
                  target="_blank"
                  variant="outline-dark"
                >
                  <i className="fab fa-github-alt"></i>
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
          <Card className="cardStyle">
            <Card.Img
              variant="top"
              src={AccioCuriosImage}
            />
            <Card.Body>
              <Card.Title>
                AccioCurios - Buy/Sell Collectibles Marketplace
              </Card.Title>
              <Card.Text>
                This application was built using Ruby on Rails. The app allows
                users to sell or buy collectibles from a safe/secure
                marketplace.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup className="d-flex" size="md">
                <Button variant="dark" href="https://acciocurios.herokuapp.com/" target="_blank">
                  <i className="fas fa-link"></i>
                </Button>
                <Button variant="outline-dark" href="https://github.com/MomentaiChris26/AccioCurios" target="_blank">
                  <i className="fab fa-github-alt"></i>
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
          <Card className="cardStyle">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup className="d-flex" size="md">
                <Button variant="dark">
                  <i className="fas fa-link"></i>
                </Button>
                <Button variant="outline-dark">
                  <i className="fab fa-github-alt"></i>
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}
export default Projects;
