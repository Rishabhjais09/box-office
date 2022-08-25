import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home page' },
  { to: '/starr', text: 'Start page' },
  { to: '/404', text: '404! page' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
