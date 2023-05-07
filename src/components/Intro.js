import { Button, Col, Container, Row } from 'react-bootstrap';
import Bg from "../assets/image/bg-intro.png";
import whatsapp from "../assets/image/whatsapp.svg";
import linked from "../assets/image/linked.svg";
import instagram from "../assets/image/instagram.svg";
import twitter from "../assets/image/twitter.svg";


const Intro = () => {
    return(
            <div className='intro'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                        <div className='text-intro'>
                            <div className='tittle-f'>Hallo,</div>
                            <div className='tittle-s'>Kami ada untuk membantu kalian</div>
                            <div className='tittle-s'>dalam pembuatan website.</div>
                            <div className='tittle-t'>Ayo pesan website sesuai pesanan anda</div>
                        </div>
                        <div className='mt-5'>
                            <Button className='button-f' variant='primary' size='lg'>Kontak Kami</Button>
                            <Button className='button-s' variant='outline-primary' size='lg'>Lihat Kerja Kami</Button>
                        </div>
                        <div className='icon-sosmed'>
                            <a href="">
                            <img 
                            className='pe-4'
                            src={whatsapp} 
                            alt="whatsapp logo" 
                            />
                            </a>
                            <a href="">
                                <img 
                                className='pe-4'
                                src={instagram} 
                                alt="instagram logo" 
                                />
                            </a>
                            <a href="">
                                <img 
                                className='pe-4'
                                src={twitter} 
                                alt="twitter logo" 
                                />
                            </a>
                            <a href="">
                                <img 
                                className='pe-4'
                                src={linked} 
                                alt="linked logo" 
                                />
                            </a>
                        </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className='img-intro text-center'>
                                <img width={441} height={388} src={Bg} alt="Bg.jpg" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Intro