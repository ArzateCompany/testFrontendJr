import React from 'react';

const NavList = ({ children }) => (
  <ul className="nav nav-tabs" role="tablist">
    {children}
  </ul>
);

export default NavList;
