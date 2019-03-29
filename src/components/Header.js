import React from 'react';
import rbLogo from './img/rbLogo.png';
const Header = () => {
    return(
        <div class="firstDiv">


    <nav class="navbar navbar-expand-lg"  id="knav">
      <a class="navbar-brand backgroundImg" href="#"><img src={rbLogo} class=""  id="ka"/></a>
    
      <button class="navbar-toggler navColor respButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class=" navColor"><i class="fa fa-bars"></i></span>
      </button>
    
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
         
          <li class="nav-item dropdown navColor">
            <a class="nav-link dropdown-toggle navColor " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span class="navColor"> Bikes in Bangalore</span>
             
            </a>
            <div class="dropdown-menu navColor" aria-labelledby="navbarDropdown">
              <a class="dropdown-item " href="#" >Bengaluru</a>
              <a class="dropdown-item " href="#" >Chennai</a>
              <a class="dropdown-item " href="#" >Delhi</a>
            </div>
          </li>
     
        </ul>
        <a class="nav-link navColor" href="#"  >Offers</a> 
        <a class="nav-link navColor" href="#"  >Traffic</a> 
        <a class="nav-link navColor" href="#"  >Search</a> 
        <a class="nav-link navColor" id="menuBar" href="#"  >Menu</a> 
       
        <form class="form-inline my-2 my-lg-0">
         <button class="btn navColor" type="btn" id="kb1">Sign up</button>
          <button class="btn  navColor" type="btn" id="kb2">Login</button>
        </form>
      </div>
    </nav>
    
    </div>
    )
}
export default Header;