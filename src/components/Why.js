import { Col, Container, Row } from "react-bootstrap";
import Whyimg from "../assets/image/img-why.png";

const Why = () => {
    return(
        <div className='why'>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="img-why">
                            <img height={337} width={526} src={Whyimg} alt="Why Image" />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="content-pertama">Why Choose Us</div>
                        <div className="content-kedua">Fast, Trusted, Chip</div>
                        <div className="content-ketiga pe-5">Lorem ipsum dolor sit amet consectetur. Lacus a pharetra aliquam vitae euismod leo adipiscing ac augue. Augue tincidunt massa laoreet nunc. Viverra posuere senectus arcu et ac. Pulvinar dolor pulvinar tincidunt id eget sem blandit. Et amet rutrum eleifend ultrices viverra mauris. Aliquam sed urna ipsum gravida a sodales nulla viverra. Ornare nisl dis eget egestas nulla sit nunc. Donec sollicitudin sit justo venenatis facilisi donec. Dui imperdiet a cum quam at lorem magnis id risus. Enim quis a aliquam vitae et volutpat.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Why