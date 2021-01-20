import React from 'react';
import { Link } from 'react-router-dom';

const NavListItem = ({ itemTitle, className, href }) => (
  <li className={className || ''}>
    <Link
      to={href || ''}
    >
      {itemTitle || 'titulo'}
    </Link>
  </li>
);

export default NavListItem;
