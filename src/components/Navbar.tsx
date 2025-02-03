import React from 'react';
import './style.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light mx-3">
        <ul className="navbar-nav list-none">
            <li className="nav-item">
                <a className="nav-link" href="#">AG</a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
