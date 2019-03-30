import React from "react";
import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";
import b4 from "../assets/img/b4.png";
import b5 from "../assets/img/b5.png";
import b6 from "../assets/img/b6.png";
import b7 from "../assets/img/b7.png";
import b8 from "../assets/img/b8.png";
import b9 from "../assets/img/b9.png";
import b10 from "../assets/img/b10.png";
import b11 from "../assets/img/b11.png";
import { Container, Row, Col} from 'reactstrap'
const Fleet = () => {
  return (
        <Container id="fleet-container">
                <Container fluid className="heading">Our Fleet</Container>
        <Container id="fleet-inner-container">
        <Row class="fleet-row">
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col">
            <div className="fleet-label">Triumph Street Twin</div>
            <img src={b1} className="fleet-img"/>
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col"><div className="fleet-label">Benelli TNT 600 i</div>
            <img src={b2} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col" ><div className="fleet-label">Harley Davidson Iron 883</div>
            <img src={b3} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col" ><div className="fleet-label">Classic 350</div>
            <img src={b4} className="fleet-img" />
            </Col>
        </Row>
        <Row class="fleet-row">
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col"><div className="fleet-label">Himalayan</div>
            <img src={b5} className="fleet-img"/>
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col"><div className="fleet-label">Dominar 400</div>
            <img src={b6} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col" ><div className="fleet-label">Avenger Cruise 220</div>
            <img src={b7} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col" ><div className="fleet-label">Activa</div>
            <img src={b8} className="fleet-img" />
            </Col>
        </Row>
        <Row class="fleet-row">
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col"><div className="fleet-label">Classic 350</div>
            <img src={b9} className="fleet-img"/>
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col"><div className="fleet-label">Yamaha FX</div>
            <img src={b10} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12" class="fleet-col" ><div className="fleet-label">Duke 200</div>
            <img src={b11} className="fleet-img" />
            </Col>
    
            <Col lg="3" md="6" sm="6" xs="12"  class="fleet-col"><div className="fleet-label empty-div">See More</div>
            
            </Col>
        </Row>
    </Container>
    </Container>
  );
};
export default Fleet;
