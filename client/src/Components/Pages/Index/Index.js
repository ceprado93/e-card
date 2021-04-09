import { useState, useLayoutEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
import userman from './userImage.png'
import share from './share.png'
import contacts from './phone-book.png'
import bcard from './business-cards.png'
import desktop from './desktop.png'
import signup from './signup.png'
import exchange from './exchange.png'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const IndexPage = ({ loggedUser }) => {

    const [show, setShow] = useState({ news: true, media: false })
    const [size, setSize] = useState(0)


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        { window.innerWidth > 1000 && setSize(400) }
        { window.innerWidth < 1000 && setSize(400) }

    }, [])

    function onReady(event) {
        event.target.pauseVideo();
    }

    const VideoWrapper = styled.div`
    width:100%;
    height:${size};
    margin-bottom: 80px;
    `


    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <>
            <section className="first-section">
                <Container>
                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <h1>E-Card</h1>
                            <h4>Reliable online bussiness cards</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            <Button variant="success" block>Log in</Button>
                            <Button variant="outline-success" block>Sign up</Button>

                        </Col>
                        <Col md={5}>
                            <img src={userman} alt="user" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="empty-div">

            </section>
            <section className="second-section">
                <Container>
                    <Row>
                        <Col md={{ span: 2, offset: 2 }}>
                            <article>
                                <img src={bcard} alt="bcard" />
                                <h3>Create digital business cards easily</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                            </article>

                        </Col>
                        <Col md={{ span: 2, offset: 1 }}>
                            <article>
                                <img src={share} alt="share" />
                                <h3>Share your cards with anyone</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </article>
                        </Col>
                        <Col md={{ span: 2, offset: 1 }}>
                            <article>
                                <img src={contacts} alt="contacts" />
                                <h3>Manage your contacts seamlessly</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </article>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section className="third-section">
                <Container>
                    <h2>Get started</h2>
                    <hr></hr>
                    <Row style={{ marginBottom: 150 }}>
                        <Col md={{ span: 3, offset: 2 }}>
                            <img src={signup} alt="account" />
                        </Col>
                        <Col md={5}>
                            <h3> Create an account</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                            <Link to='/signup'><Button variant="success">Sign up</Button></Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 150 }}>
                        <Col md={{ span: 5, offset: 2 }}>
                            <h3> Save E-Card on your home page</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                            <Link to='/signup'><Button variant="success">Features</Button></Link>
                        </Col>
                        <Col md={3}>
                            <img src={desktop} alt="account" />
                        </Col>

                    </Row>
                    <Row style={{ marginBottom: 50 }}>
                        <Col md={{ span: 3, offset: 2 }}>
                            <img src={exchange} alt="account" />
                        </Col>
                        <Col md={5}>
                            <h3> Share your card and network</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                            <Link to='/signup'><Button variant="success">Sign up</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="videoSection">
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <h1>How it works</h1>
                            <VideoWrapper>
                                <YouTube videoId='d2bg-jgdF1w' opts={opts} onReady={onReady} />
                            </VideoWrapper>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default IndexPage

