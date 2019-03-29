import React from 'react';
import slide from '../assets/slider.jpg';
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
const Landing = () => {
    return (
        <div>
            <div className="col div-slide landing">
                <img src={slide} alt="Responsive image"  className="col img-resposive slide"/>
            </div>
            
            <div class="row d-flex justify-content-center mb-3 container-fluid" id="r">
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <img class="card-img" src={c4} alt="Card image" />
                        <div class="card-img-overlay">
                            <h6 class="card-title">41+</h6>
                            <p class="card-text">CITIES</p> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <img class="card-img" src={c1} alt="Card image" />
                        <div class="card-img-overlay">
                            <h6 class="card-title">41+</h6>
                            <p class="card-text">CITIES</p> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <img class="card-img" src={c2} alt="Card image" />
                        <div class="card-img-overlay">
                            <h6 class="card-title">41+</h6>
                            <p class="card-text">CITIES</p> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <img class="card-img" src={c1} alt="Card image" />
                        <div class="card-img-overlay">
                            <h6 class="card-title">41+</h6>
                            <p class="card-text">CITIES</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="padding">
            <div class="row d-flex justify-content-center mb-3 container-fluid" id="rr">
            <div class="col-12 d-flex justify-content-center" id="rrr"><h1>Our Specialty</h1></div>
            <div class="row container-fluid d-flex justify-content-center" id="re">
                <div class="col-2 col-lg-3 col-sm-6 mr-4 ml-4 mb-5 p-1" id="cold">
                    <div class="row pl-4">
                        <div class="col "><h1>1</h1></div>
                        <div class="col-10 "><h6>First RTO authorised bike rental</h6></div>
                    </div>
                    <div class="row">
                        <div class="col-12"><p>Pioneers in reting bikes in Karnataka.</p></div>
                        
                    </div>
                </div>
                <div class="col-2 col-lg-3 col-sm-6  mr-4 ml-4 mb-5 p-1" id="cold">
                    <div class="row pl-4">
                        <div class="col "><h1>2</h1></div>
                        <div class="col-10 "><h6>Bikes in top notch conditions</h6></div>
                    </div>
                    <div class="row">
                        <div class="col-12"><p>Each bike is cleaned and serviced weekly and also once before renting out.</p></div>
                        
                    </div>
                </div>
                <div class="col-2 col-lg-3 col-sm-6  mr-4 ml-4 mb-5 p-1" id="cold">
                    <div class="row pl-4">
                        <div class="col "><h1>3</h1></div>
                        <div class="col-10 "><h6>Timely pick up and drop off</h6></div>
                    </div>
                    <div class="row">
                        <div class="col-12"><p>If we delay even by 15 mins, 25 Rs on scooter and 50 Rs on bikes will be refunded.</p></div>
                        
                    </div>
                </div>
                <div class="col-2 col-lg-3 col-sm-6  mr-4 ml-4 mb-5 p-1" id="cold">
                    <div class="row pl-4">
                        <div class="col "><h1>4</h1></div>
                        <div class="col-10 "><h6>Home delivery on weekdays*</h6></div>
                    </div>
                    <div class="row">
                        <div class="col-12"><p>Now avail lour service and get the key to happiness at your doorstep.</p></div>
                        
                    </div>
                </div>
            </div>
            <div class="row container-fluid d-flex justify-content-center" id="re">
            <div class="col-2 mr-4 ml-4 mb-5 p-1" id="cold">
            <div class="row pl-4">
                <div class="col "><h1>5</h1></div>
                <div class="col-10 "><h6>Commercial Insurance is covered</h6></div>
            </div>
            <div class="row">
                <div class="col-12"><p>We have a valid commercial insurance for the rider, pillion and third party</p></div>
                
            </div>
        </div>
        <div class="col-2 mr-4 ml-4 mb-5 p-1" id="cold">
            <div class="row pl-4">
                <div class="col "><h1>6</h1></div>
                <div class="col-10 "><h6>Most trusted and tranparent process</h6></div>
            </div>
            <div class="row">
                <div class="col-12"><p>We are upfront about the entire process of renting a bike from us.</p></div>
                
            </div>
        </div>
        <div class="col-2 mr-4 ml-4 mb-5 p-1" id="cold">
            <div class="row pl-4">
                <div class="col "><h1>7</h1></div>
                <div class="col-10 "><h6>19 pick up locations in Bangalore</h6></div>
            </div>
            <div class="row">
                <div class="col-12"><p>There are good chances you will find us in 3 km radius from your location.</p></div>
                
            </div>
        </div>
        <div class="col-2 mr-4 ml-4 mb-5 p-1" id="cold">
            <div class="row pl-4">
                <div class="col "><h1>8</h1></div>
                <div class="col-10 "><h6>Choose from a wide variety of bikes</h6></div>
            </div>
            <div class="row">
                <div class="col-12"><p>Pick a bike that suits your need from scooters to superbikes</p></div>
                
            </div>
        </div>
            </div>
        </div>
        </div>
            
        </div>
    )
}
export default Landing 




<container class="m-4" id="m">
                <Row id="aa">
                    <Col className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Card class="crds">
                            <CardImg src={c1} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle>1</CardTitle>
                                <CardText>hellio</CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><Card><div>afsdfasd</div></Card></Col>
                    <Col className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><Card><div>afsdfasd</div></Card></Col>
                    <Col className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><Card><div>afsdfasd</div></Card></Col>
                </Row>
            </container>





            <CardDeck class="crs">
            <Card>
                <CardImg src={c1} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>1</CardTitle>
                    <CardText>hellio</CardText>
                </CardImgOverlay>
            </Card>
            <Card>
                <CardImg src={c1} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>1</CardTitle>
                    <CardText>hellio</CardText>
                </CardImgOverlay>
            </Card>
            <Card>
                <CardImg src={c1} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>1</CardTitle>
                    <CardText>hellio</CardText>
                </CardImgOverlay>
            </Card>
            <Card>
                <CardImg src={c1} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>1</CardTitle>
                    <CardText>hellio</CardText>
                </CardImgOverlay>
            </Card>
        </CardDeck>




        <Container id="cc">

                <Row id="aa">
                    <Col className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <Card>
                            <CardImg src={c1} alt="Card image cap" class="imeg"/>
                            <CardImgOverlay><span>test</span></CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <Card>
                            <CardImg src={c2} alt="Card image cap" class="imeg"/>
                            
                        </Card>
                    </Col>
                    <Col className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <Card>
                            <CardImg src={c3} alt="Card image cap" class="imeg"/>
                            
                        </Card>
                    </Col>
                    <Col className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <Card>
                            <CardImg src={c4} alt="Card image cap" class="imeg"/>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
   