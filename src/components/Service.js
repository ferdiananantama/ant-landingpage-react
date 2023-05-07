import { Card, Col, Container, Row } from "react-bootstrap";
import Service1 from "../assets/image/Service1.png";
import Service2 from "../assets/image/Service2.png";
import Service3 from "../assets/image/Service3.png";
import Service4 from "../assets/image/Service4.png";

const Service = () => {
    return (
        <div className="service-page">
            <Container className="text-center mt-5">
                <div className="tittle-service">Service Kita</div>
                <div className="text-service">pelayanan yang kami berikan kepada anda</div>
            </Container>
            <Container className="pe-5 ps-5">
                <Row className="mt-5 pt-3">
                    <Col xs={12} lg={3} className="col-service mt-3">
                        <Card className="card-service" style={{height: '284px', width:'218px'}}>
                            <div className="content-card text-center align-items-center">
                                <img height={65} width={65} src={Service1} alt="Serive 1"/>
                                <Card.Body className="pt-5 mt-2">
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text className="pt-2">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} lg={3} className="col-service mt-3">
                        <Card className="card-services" style={{height: '284px', width:'218px'}}>
                            <div className="content-card text-center align-items-center">
                                <img height={65} width={65} src={Service2} alt="Serive 1"/>
                                <Card.Body className="pt-5 mt-2">
                                    <Card.Title>UI/UX Design</Card.Title>
                                    <Card.Text className="pt-2">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} lg={3} className="col-service mt-3">
                        <Card className="card-services" style={{height: '284px', width:'218px'}}>
                            <div className="content-card text-center align-items-center">
                                <img height={65} width={65} src={Service3} alt="Serive 1"/>
                                <Card.Body className="pt-5 mt-2">
                                    <Card.Title>Dekstop App</Card.Title>
                                    <Card.Text className="pt-2">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} lg={3} className="col-service mt-3">
                        <Card className="card-services" style={{height: '284px', width:'218px'}}>
                            <div className="content-card text-center align-items-center">
                                <img height={65} width={65} src={Service4} alt="Serive 1"/>
                                <Card.Body className="pt-5 mt-2">
                                    <Card.Title>Graphic Design</Card.Title>
                                    <Card.Text className="pt-2">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Service