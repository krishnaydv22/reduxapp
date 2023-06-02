import React from 'react';
import './container.css';
import { Link } from 'react-router-dom';

 const Header = () => {
    return(
        <div className='fakeName'>
          <div  style={{alignItems:"center",marginLeft:"20px"}}>
              <Link to='/'><h2>FakeShop</h2></Link>
          </div>

        </div>

    )


}

export default Header;