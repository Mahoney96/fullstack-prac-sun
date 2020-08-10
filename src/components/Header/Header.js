import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return(<div>
            <h1> This is my Header Component!!</h1>
            <nav>
                <Link to='/'>Dashboard</Link>
                <Link to='AddInventory'>Add Inventory</Link>
            </nav>
        </div>
    );

}

export default Header;