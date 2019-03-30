import React from 'react';
import city from '../assets/img/city.JPG';
import km from '../assets/img/km.JPG';
import fb from '../assets/img/fb.JPG';
import google from '../assets/img/google.JPG';
import {Container, Row, Col} from 'reactstrap'

const Stats = () => {
    return(
            <Container id="stats-container">
                <Row>
                    <Col lg="3" md="6" sm="6" xs="12" >
                        <img src={city} className="img-responsive stats-img"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" >
                        <img src={km} className="img-responsive stats-img"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" >
                        <img src={fb} className="img-responsive stats-img"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" >
                        <img src={google} className="img-responsive stats-img"/>
                    </Col>
                </Row>
            </Container>
    )
}
export default Stats;