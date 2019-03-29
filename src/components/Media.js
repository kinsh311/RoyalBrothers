import React from 'react';
import yourStory1 from './img/yourStory1.png';
import toi1 from './img/toi1.png';
import et1 from './img/et1.png';
import hindu1 from './img/hindu1.png';
const Media = () => {
    return(
        <div class="StatsSection" id="kstats">
        <div class="flexBox innerStatsFlexWrapper">
            <div class="innerStatsFlex">
                <img src={yourStory1}  class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={toi1}  class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={et1}  class="img-responsive statsImg"/>
            </div>
    
            <div class="innerStatsFlex">
                <img src={hindu1}  class="img-responsive statsImg"/>
            </div>
        </div>
    </div>
    )
}
export default Media