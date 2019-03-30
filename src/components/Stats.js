import React from 'react';
import city from './img/city.JPG';
import km from './img/km.JPG';
import fb from './img/fb.JPG';
import google from './img/google.JPG';
import {Container, Row, Col} from 'reactstrap'

const Stats = () => {
    return(
            <Container id="kstat">
                <Row class="">
                    <Col lg="3" md="6" sm="6" xs="12" class="som">
                        <img src={city} class="img-responsive statsImg"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" class="som">
                        <img src={km} class="img-responsive statsImg"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" class="som">
                        <img src={fb} class="img-responsive statsImg"/>
                    </Col>
            
                    <Col lg="3" md="6" sm="6" xs="12" class="som">
                        <img src={google} class="img-responsive statsImg"/>
                    </Col>
                </Row>
            </Container>
    )
}
export default Stats;