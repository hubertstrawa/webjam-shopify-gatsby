import React from 'react';
import { LayoutWrapper, Footer } from './styles';
import {Header} from '../Header';
import {FaHeart} from 'react-icons/fa'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
        <Footer>Made in <FaHeart color="red"/> with Gatsby<br/>
        <a href="mailto:hubertstrawa@gmail.com">hubertstrawa@gmail.com</a> <br/>Warsaw 2021</Footer>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
