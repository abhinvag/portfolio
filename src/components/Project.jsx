import React from 'react'
import {Carousel, Container, Row, Col} from "react-bootstrap"
import "../css/Project.css"

function Project(props) {
    return (
        <Container>
            <Row className="heading-div">
                <h1>{props.name}</h1>
            </Row>
            <Row>
                <Col xs="12" lg="6" className="carousels-div">
                    <Carousel className="carousel-div">
                        {props.images.map((value) => {
                            return(
                                <Carousel.Item>
                                    <img
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
                            return(
                                <h3 className="tu-item">{value}</h3>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="btn-div">
                <a className="btn" target="_blank" rel="noreferrer" href={props.src}>Source Code</a>
                <a className="btn" target="_blank" rel="noreferrer" href={props.visit}>Visit</a>
                <a className="btn" target="_blank" rel="noreferrer" href={props.demo}>Demo Video</a>
            </Row>
            {(props.last === "true") ? (
                <Row className="next-btn-div">
                    <a className="next-btn" href="/project1"><i class="fas fa-arrow-left"></i> Prev</a>
                </Row>
            ):(
                <Row className="next-btn-div">
                    <a className="next-btn" href="/project2">Next <i class="fas fa-arrow-right"></i></a>
                </Row>
            )}
        </Container>
    )
}

export default Project
