import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/AboutUs">About us</Link> | <Link to="/KegAdd">Add a new Keg</Link> | <Link to="/ViewKegs">View Kegs currently in stock</Link>
    </div>
  );
}

export default Header;
