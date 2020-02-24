import React from "react";
import Heading from "../components/Heading";
import { Row, Container, Col } from "react-bootstrap";

const Contact = () => {
	return (
		<div>
			<hr className="divider" />
			<Heading title={"Contact"} />
			<Container className="my-5">
				<Row>
					<Col>
						<a href="mailto:webmaster@example.com">
							<i className="fas fa-envelope contactIcon"></i>
						</a>{" "}
					</Col>
					<Col>
						<a href="https://github.com/MomentaiChris26">
							<i className="fab fa-github-alt contactIcon"></i>
						</a>{" "}
					</Col>
					<Col>
						{" "}
						<a href="https://www.linkedin.com/in/christopherqtri/">
							<i className="fab fa-linkedin contactIcon"></i>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Contact;
