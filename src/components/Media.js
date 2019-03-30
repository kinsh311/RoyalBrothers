import React from 'react';
import p4 from '../assets/img/p4.png';
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p2.png';
import p3 from '../assets/img/p3.png';
const Media = () => {
    return(
        
        <div className="flexBox media-out">
            <div className="media-in">
                <img src={p4}  className="img-responsive media-img"/>
            </div>
    
            <div className="media-in">
                <img src={p1}  className="img-responsive media-img"/>
            </div>
    
            <div className="media-in">
                <img src={p2}  className="img-responsive media-img"/>
            </div>
    
            <div className="media-in">
                <img src={p3}  className="img-responsive media-img"/>
            </div>
        </div>
    
    )
}
export default Media