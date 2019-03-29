import React from 'react';
import city from './img/city.JPG';
import km from './img/km.JPG';
import fb from './img/fb.JPG';
import google from './img/google.JPG';


const Stats = () => {
    return(
        <div class="StatsSection" id="kstat">
        <div class="flexBox innerStatsFlexWrapper">
            <div class="innerStatsFlex">
                <img src={city} class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={km} class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={fb} class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={google} class="img-responsive statsImg"/>
            </div>
        </div>
    </div>
    )
}
export default Stats;