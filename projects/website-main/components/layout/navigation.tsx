import React from 'react';
import ActiveLink from './active-link';

const ROOT_ROUTE = '/';

const navLinks = [
  {
    title: 'Home',
    path: ROOT_ROUTE,
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'About',
    path: '/about',
  },
];

const Navigation = (): JSX.Element => {
  return (
    <nav className="nav-container">
      <div className="nav-links flex items-end">
        {navLinks.map((link) => (
          <ActiveLink
            key={link.path}
            href={link.path}
            activeClassName="border-black"
            inactiveClassName="border-white hover:border-gray-500"
          >
            <a className="link leading-tight text-black font-display no-underline ml-6 border-b-2 transition-colors">
              {link.title}
            </a>
          </ActiveLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
