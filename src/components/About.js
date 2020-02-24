import React from "react";
import Heading from "../components/Heading";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
	return (
		<div className="text-center">
			<hr className="divider" />
			<Heading title={"About"} />
			<Container style={{ marginBottom: "70px" }}>
				<Row>
					<Col lg={6} md={12} sm={12}>
						<img
							src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
							alt="portrait"
							className="aboutImg"
						/>
					</Col>
					<Col lg={6} md={12} sm={12}>
						<p className="aboutTxt">
							Before I was a coder, I worked in finance and accounting and decided to pursuit my passion in programming and development. I completed a 6 month bootcamp at Coder Academy. <br /> I love playing videos, playing obscure boardgames with friends and enjoying scenic views along hikes.{" "}
							<br /> I love writing code and I'm great at problem solving! <br />Feel free to shoot me an email if you're interested!
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default About;
