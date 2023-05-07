import { Col, Container, Row } from "react-bootstrap";
import Libert from '../assets/image/libertus.png';
import Ferdi from '../assets/image/ferdian.png';
import Febbi from '../assets/image/febby.png';

const Tim = () => {
    return(
        <div className="pages-tim">
            <Container className="justify-content-center text-center">
                <div className="tittle-service">Our Team</div>
                <div className="text-service">Lorem ipsum dolor sit amet consectetur Vitae vel sagittis</div>
                <div className="spasi-konten">
                    <Row className="spasi-foto">
                        <Col xs={12} lg={4}>
                            <div>
                                <img className="img-tim" height={230} width={230} src={Libert} alt="Libertus Foto" />
                                <div className="nama">Libertus</div>
                                <div className="bidang">Programmer</div>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div>
                                <img className="img-tim" height={230} width={230} src={Ferdi} alt="Libertus Foto" />
                                <div className="nama">Ferdian Estu Anantama</div>
                                <div className="bidang">UI/UX Designer</div>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div>
                                <img className="img-tim" height={230} width={230} src={Febbi} alt="Libertus Foto" />
                                <div className="nama">Febby Febriansyah</div>
                                <div className="bidang">Programmer</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Tim