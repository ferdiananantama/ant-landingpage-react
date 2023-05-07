import { Nav, Container, Navbar } from "react-bootstrap";
import logo from '../assets/image/logo.png';

const NavigationBar = () =>{
    return(
        <Container>
            <Navbar className="pt-4">
                <Navbar.Brand>
                    <img 
                    className="nav-brand"
                    src={logo}
                    alt="LS logo" />
                </Navbar.Brand>
                <Nav className="nav-text container-fluid justify-content-center" activeKey="/home">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link className="ps-5">Service</Nav.Link>
                    <Nav.Link className="ps-5">About</Nav.Link>
                    <Nav.Link className="ps-5">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavigationBar