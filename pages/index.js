import Head from 'next/head';
import { Container, Navbar, Button, Card, Row, Col } from 'react-bootstrap';
//import useSWR from 'swr';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMoneyBillAlt, faWeight } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CustomInputGroup from '../components/CustomInputGroup';


const IndexPage = () => {
    return (
        <>
            <Head>
                <title>Next.js Bootstrap Webpage</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            </Head>
            <Navbar bg="light" variant="dark" expand="lg">
                <NavBar />
            </Navbar>
            <div className="jumbotron position-relative">
                <Container>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p style={{ color: '#ffffff' }}>Software Recruitment Specialists</p>
                            <h1 style={{ color: '#ffffff' }}>Elevate your career</h1>
                            <CustomInputGroup />
                        </div>
                        <div className="circle"></div>
                        <div className="col-md-6">
                            <div className="banner-wrapper">
                                <img src="/banner.jpg" className="img-fluid square-image" alt="Banner Image" style={{ height: '100%' }} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


            <Container className="client text-center">
                <h6>Who we work with</h6>
                <Row className="align-items-center mt-4">
                    <Col className="px-3"><img src="/client1.png" alt="Partner 1" className="img-fluid" /></Col>
                    <Col className="px-3"><img src="/client2.png" alt="Partner 2" className="img-fluid" /></Col>
                    <Col className="px-3"><img src="/client3.png" alt="Partner 3" className="img-fluid" /></Col>
                    <Col className="px-3"><img src="/client4.png" alt="Partner 4" className="img-fluid" /></Col>
                    <Col className="px-3"><img src="/client5.png" alt="Partner 5" className="img-fluid" /></Col>
                </Row>
            </Container>

            <div className='card-container'>
                <Container>
                    <h2 className="text-center mb-4">Latest Jobs</h2>
                    <Row>
                        <Col>
                            <Card className="rounded-1">
                                <Card.Body className="custom-card-body">
                                    <img src="/sectors.svg" alt="Python Logo" className="img-fluid mb-3" />
                                    <Card.Title className="card-title-large mb-3">Software Engineer</Card.Title>
                                    <Row>

                                        <Col md={12}>
                                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" /> London</p>
                                            <p><FontAwesomeIcon icon={faMoneyBillAlt} className="icon-small" /> £65,000</p>
                                            <p>Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                        </Col>
                                    </Row>
                                    <Button variant="primary btn-card my-2">View this job</Button>
                                    <small class="text-muted">Posted on 21/03/2024</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="rounded-2">
                                <Card.Body className="custom-card-body">
                                    <img src="/sectors.svg" alt="Python Logo" className="img-fluid mb-3" />
                                    <Card.Title className="card-title-large mb-3">Software Engineer</Card.Title>
                                    <Row>

                                        <Col md={12}>
                                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" style={{ color: '#ffffff' }} /> London</p>
                                            <p><FontAwesomeIcon icon={faMoneyBillAlt} className="icon-small" style={{ color: '#ffffff' }} /> £65,000</p>
                                            <p>Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                        </Col>
                                    </Row>
                                    <Button variant="primary btn-card my-2">View this job</Button>
                                    <small class="text-muted" style={{ color: '#ffffff!important' }} >Posted on 21/03/2024</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="rounded-3">
                                <Card.Body className="custom-card-body">
                                    <img src="/sectors.svg" alt="Python Logo" className="img-fluid mb-3" />
                                    <Card.Title className="card-title-large mb-3">Software Engineer</Card.Title>
                                    <Row>

                                        <Col md={12}>
                                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" /> London</p>
                                            <p><FontAwesomeIcon icon={faMoneyBillAlt} className="icon-small" /> £65,000</p>
                                            <p>Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                        </Col>
                                    </Row>
                                    <Button variant="primary btn-card my-2">View this job</Button>
                                    <small class="text-muted">Posted on 21/03/2024</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <div>
                            <a href="#" className="mr-2"><FontAwesomeIcon icon={faArrowCircleLeft} style={{ height: '40px', color: '#7283a6' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faArrowCircleRight} style={{ height: '40px', color: '#0e2152' }} /></a>
                        </div>
                        <a href="#" style={{ color: '#0E2152', fontWeight: 'bold', textDecoration: 'none' }}>View more jobs</a>

                    </div>
                </Container>
            </div>

            <footer className="footer-container text-light">
                <Container>
                    <Row>
                        <Col>
                            <h5 className='mb-3'>Software Recruitment co.</h5>
                            <div>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{ height: '24px', color: 'white' }} className="mr-3" /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ height: '24px', color: 'white' }} className="mr-3" /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ height: '24px', color: 'white' }} className="mr-3" /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ height: '24px', color: 'white' }} /></a>
                            </div>
                        </Col>
                        <Col>
                            <h5 className="card-title-large">Explore</h5>
                            <ul className="list-unstyled">
                                <li style={{ padding: '7px 0' }}><a href="#link1" className="footer-links">Homepage</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link2" className="footer-links">For jobseekers</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link3" className="footer-links">For clients</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link3" className="footer-links">Our sectors</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link3" className="footer-links">Resources</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link3" className="footer-links">Contact us</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className="card-title-large">Sectors</h5>
                            <ul className="list-unstyled">
                                <li style={{ padding: '7px 0' }}><a href="#link4" className="footer-links">Software Engineering</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link5" className="footer-links">DevOps</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link6" className="footer-links">Cloud</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link4" className="footer-links">Infrastructure</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link5" className="footer-links">Testing</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#link6" className="footer-links">Security</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className="card-title-large">Services</h5>
                            <ul className="list-unstyled">
                                <li style={{ padding: '7px 0' }}><a href="#support1" className="footer-links">Nav item</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#support2" className="footer-links">Nav item</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#support3" className="footer-links">Nav item</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#support1" className="footer-links">Nav item</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#support2" className="footer-links">Nav item</a></li>
                                <li style={{ padding: '7px 0' }}><a href="#support3" className="footer-links">Nav item</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default IndexPage;
