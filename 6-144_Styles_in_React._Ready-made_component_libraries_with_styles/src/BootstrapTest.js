import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';

const BootstrapTest = () => {
	return (
		<Container className='mt-5 mb-5'>
			<Row>
				<Col>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
							We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
				<Col>
					<Carousel data-bs-theme="dark">
						<Carousel.Item>
							<img
							className="d-block w-100"
							src="https://opis-cdn.tinkoffjournal.ru/mercury/main_travel_teriberka_-denis-belitsky_shutterstock.qr6v7i4k8l6v.jpg"
							alt="First slide"
							/>
							<Carousel.Caption>
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src="https://s0.rbk.ru/v6_top_pics/media/img/7/84/346823210501847.webp"
							alt="Second slide"
							/>
							<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src="https://cdn.tripster.ru/thumbs2/ce69138a-7417-11ed-8bc3-3a2172581542.800x600.jpeg"
							alt="Third slide"
							/>
							<Carousel.Caption>
							<h5>Third slide label</h5>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
	  	</Container>
	)
}

export default BootstrapTest;