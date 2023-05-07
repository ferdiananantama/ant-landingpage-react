import { Col, Container, Row } from "react-bootstrap";
import Ai from "../assets/image/ai.png";
import Xd from "../assets/image/xd.png";
import Corel from "../assets/image/corel.png";
import Js from "../assets/image/js.png";
import Imagehtmk from "../assets/image/html.png";
import Imagecss from "../assets/image/css.png";

const Tools = () => {
    return(
        <div className="pages-tools">
            <Container className="justify-content-center text-center">
                <div className="tittle-tools">Tools & Skill</div>
                <div className="mt-5">
                    <Row>
                        <Col xs={12} lg={2}>
                            <img src={Ai} alt="" />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src={Xd} alt="" />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src={Corel} alt="" />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src={Js} alt="" />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src={Imagehtmk} alt="" />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src={Imagecss} alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Tools