import React from 'react';
import b1 from './img/b1.png';
import b2 from './img/b2.png';
import b3 from './img/b3.png';
import b4 from './img/b4.png';
import b5 from './img/b5.png';
import b6 from './img/b6.png';
import b7 from './img/b7.png';
import b8 from './img/b8.png';
import b9 from './img/b9.png';
import b10 from './img/b10.png';
import b11 from './img/b11.png';
const Fleet = () => {
    return(
        <div class="container-fluid bikeMainDiv">
        <div class="ourFleet">OUR FLEET</div>
    <div class="flexBox bikeWrapper">

        <div class="specialInnerDiv bikeDiv">
                Triumph Street Twin
                <img src={b1}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                Benelli TNT 600 i
                <img src={b2}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                Harley Davidson Iron 883
                <img src={b3}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                 <div>Classic 350</div>
                <img src={b4}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Himalayan</div>
                <img src={b5}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Dominar 400</div>
                <img src={b6}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Avenger Cruise 220</div>
                <img src={b7}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Activa</div>
                <img src={b8}/>

    </div>
    <div class="specialInnerDiv bikeDiv">
                <div>Classic 350</div>
                <img src={b9}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Yamaha FZ</div>
                <img src={b10}/>
        </div>
                <div class="specialInnerDiv bikeDiv">
                <div>Duke 200</div>
                <img src={b11}/>

    </div>
    <div class="specialInnerDiv bikeDiv">
                <div id="ksm">See More </div>
    </div>
</div>
</div>
    )
}
export default Fleet;   