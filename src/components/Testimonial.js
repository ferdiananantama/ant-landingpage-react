import { Card, Col, Container, Row } from "react-bootstrap";
import Komaimg from "../assets/image/koma.png";
import Imgoyon from "../assets/image/oyon.png";
import Imgrudi from "../assets/image/rudi.png";
import Imgstenli from "../assets/image/stenli.png";

const Testi = () => {
    return (
        <div className="pages-testi">
            <Container>
                <div className="justify-content-center text-center content-testi-all">
                    <div className="content-judul-testi">Testimonial</div>
                    <div className="content-testies">Apa yang klien katakan tentang kita.</div>
                    <div className="content-all-testi">
                        <Row>
                            <Col xs={12} lg={4} className='mt-3'>
                                <Card className="card-testi" style={{ width: '316px', height:'304px' }}>
                                    <div className="mt-5">
                                        <img width={43} height={33} src={Komaimg} alt="Gambar koma" />
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="content-testi">
                                        Lorem ipsum dolor sit amet consectetur. Interdum vitae convallis nunc tempor sit mattis. Congue libero diam eu malesuada lorem. Iaculis.
                                        </Card.Text>
                                        <img width={70} height={70} src={Imgoyon} alt="Gambar Oyon" />
                                        <div  className="nama-testi" >Oyon Ternando</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} className='mt-3'>
                                <Card className="card-testi" style={{ width: '316px', height:'304px' }}>
                                    <div className="mt-5">
                                        <img width={43} height={33} src={Komaimg} alt="Gambar koma" />
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="content-testi">
                                        Lorem ipsum dolor sit amet consectetur. Interdum vitae convallis nunc tempor sit mattis. Congue libero diam eu malesuada lorem. Iaculis.
                                        </Card.Text>
                                        <img width={70} height={70} src={Imgrudi} alt="Gambar Rudi" />
                                        <div  className="nama-testi" >Oyon Ternando</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} className='mt-3'>
                                <Card className="card-testi" style={{ width: '316px', height:'304px' }}>
                                    <div className="mt-5">
                                        <img width={43} height={33} src={Komaimg} alt="Gambar koma" />
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="content-testi">
                                        Lorem ipsum dolor sit amet consectetur. Interdum vitae convallis nunc tempor sit mattis. Congue libero diam eu malesuada lorem. Iaculis.
                                        </Card.Text>
                                        <img width={70} height={70} src={Imgstenli} alt="Gambar Stenli" />
                                        <div  className="nama-testi" >Oyon Ternando</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testi