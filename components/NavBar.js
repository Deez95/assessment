import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <Container>
            <Navbar.Brand href="#home" className="logo pr-4">Software Recruitment co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="For jobseekers" id="jobseekers-dropdown" className="nav-dropdown">
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum1">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="For client" id="client-dropdown" className="nav-dropdown">
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Sectors" id="sectors-dropdown" className="nav-dropdown">
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources" id="resources-dropdown" className="nav-dropdown">
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                        <NavDropdown.Item href="#Loremipsum">Lorem ipsum</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Button variant="outline-light" className='upload-cv'>Upload CV</Button>
                    <Button variant="outline-light" className="contact-us ml-2">Contact us</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    );
}

export default NavBar;
