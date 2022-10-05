import NextLink from 'next/link';
import React from 'react';
import Logo from '../assets/logo';
import Navigation from './navigation';

const Header = (): JSX.Element => (
  <div className="flex items-center justify-between relative z-50 px-5 pb-6">
    <span className="m-0 pb-0 font-display flex items-center justify-between text-lg">
      <NextLink href="/">
        <a className="no-underline">
          <Logo
            className="inline"
            style={{ width: '55px', height: '55px' }}
            strokeWidth={5}
          />
          <span className="ml-4 font-light text-black uppercase tracking-widest hidden sm:inline">
            <strong className="font-semibold">Anson</strong> Lichtfuss
          </span>
        </a>
      </NextLink>
    </span>
    <Navigation />
  </div>
);

export default Header;
