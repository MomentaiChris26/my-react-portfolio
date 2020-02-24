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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
							mauris non felis sodales commodo non nec ex. Morbi dui metus,
							mattis id sodales ut, luctus vel sem. Vestibulum aliquam tortor
							augue. <br /> Cras facilisis magna mi, et molestie lectus iaculis
							ac. Sed tristique ipsum enim, ut vulputate elit pharetra eu.{" "}
							<br /> Phasellus vehicula, neque id tincidunt cursus, elit lorem
							lobortis lacus, sed congue velit mauris in nibh.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default About;
