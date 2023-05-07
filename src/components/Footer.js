import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Wafooter from "../assets/image/wa-footer.png";
import Igfooter from "../assets/image/ig-footer.png";
import Twfooter from "../assets/image/tw-footer.png";
import Linkfooter from "../assets/image/link-footer.png";

const Footer = () => {
    return(
        <div className="page-footer">
            <Container>
                    <Row>
                        <Col>
                            <div className="col-footer-satu">
                                <div className="text-footer-satu">We do love to have you order us!</div>
                                <div className="text-footer-dua mt-3">Lorem ipsum dolor sit amet consectetur. Egestas laoreet scelerisque morbi faucibus senectus lectus donec phasellus iaculis.</div>
                                <div>
                                    <div className="text-footer-tiga">Temukan Kami di</div>
                                        <div className="box-sosmed">
                                            <img className="p-3"  src={Wafooter} alt="WA.png" />
                                        </div>
                                        <div className="box-sosmed ms-3">
                                            <img className="p-3" src={Igfooter} alt="Ig.png" />
                                        </div>
                                        <div className="box-sosmed ms-3">
                                            <img className="p-3" src={Twfooter} alt="Tw.png" />
                                        </div>
                                        <div className="box-sosmed ms-3">
                                            <img className="p-3" src={Linkfooter} alt="Link.png" />
                                        </div>
                                </div>
                                <div>
                                    <div className="konten-footer">Service</div>
                                    <div className="konten-footers">Web Developer</div>
                                    <div className="konten-footers">UI/UX Designer</div>
                                    <div className="konten-footers">Dekstop APP</div>
                                    <div className="konten-footers">Graphic Designer</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-4">
                                <div className="judul-input mt-2">Send Massage</div>
                                <Form className="mt-3">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Your Massage</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Massage" />
                                    </Form.Group>

                                    <Button className="mt-3" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Footer