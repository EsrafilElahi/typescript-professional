import { Instagram, Linkedin, Twitter } from '@icons-pack/react-simple-icons';
import React from 'react';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="mx-auto max-w-5xl py-5 flex flex-col min-h-screen justify-between">
    <header>
      <Header />
    </header>
    <main>{children}</main>
    <footer className="flex items-center justify-between text-center text-xl mt-8 mx-5">
      <strong
        className="mr-6 opacity-25"
        title={`Anson Lichtfuss © ${new Date().getFullYear()}`}
      >
        ©
      </strong>
      <span className="flex">
        <a
          className="ml-6 transition-text duration-200 hover:text-black text-gray-500"
          href="https://www.linkedin.com/in/anson-lichtfuss-3401b6128"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a
          className="ml-3 transition-text duration-200 hover:text-black text-gray-500"
          href="https://twitter.com/ansonlichtfuss"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter size={18} />
        </a>
        <a
          className="ml-3 transition-text duration-200 hover:text-black text-gray-500"
          href="https://www.instagram.com/ansonlichtfuss/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={18} />
        </a>
      </span>
    </footer>
  </div>
);

export default Layout;
