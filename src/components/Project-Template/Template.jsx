import React from 'react'
import { Carousel, Container, Row, Col } from "react-bootstrap"
import "./Template.css"

function Template(props) {
    return (
        <Container className='template-div'>
            <Row className="heading-div">
                <h1>{props.name}</h1>
            </Row>
            <Row>
                <Col xs="12" lg="6" className="carousels-div">
                    <Carousel className="carousel-div">
                        {props.images.map((value) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        style={{ "height": "35vh" }}
                                        className="d-block w-100"
                                        src={value}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Col>
                <Col className="tu-div" xs="12" lg="6">
                    <div>
                        <h2 className="tu-heading">Tech Used</h2>
                        {props.techUsed.map((value) => {
                            return (
                                <h3 className="tu-item">{value}</h3>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="btn-div">
                <a className="btn" target="_blank" rel="noreferrer" href={props.src}>Source Code</a>
                <a className="btn" target="_blank" rel="noreferrer" href={props.visit}>Live Link</a>
            </Row>
        </Container>
    )
}

export default Template
