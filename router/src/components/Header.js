import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/content'>Content</Link>
    </div>
);

export default Header;