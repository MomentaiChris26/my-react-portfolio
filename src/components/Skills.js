import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../components/Heading";

const Skills = () => {
	const skills = [
    "HTML & CSS",
    "Ruby",
    "Ruby on Rails",
    "JavaScript",
		"ReactJS",
		"NodeJS",
		"ExpressJS",
		"MongoDB",
    "Heroku and Netlify",
    "Trello and Jira",
    "Figma",
    "PostgreSQL"
	];
	return (
		<div className="skillsWrapper">
			<hr className="divider" />
			<Heading title="TechStack" />
			<Container className="mx-auto" style={{ margin: "30px 0px 30px 0px" }}>
				<Row>
					{skills.map(skill => {
						return (
							<Col lg={3} md={4} sm={12} className="my-3">
								<span>
									<i className="fas fa-cog"></i>
								</span>{" "}
								{skill}
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};
export default Skills;
