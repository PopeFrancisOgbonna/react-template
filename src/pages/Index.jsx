import React from 'react';
import styled from 'styled-components';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Home = () => {


  return(
    <HomeWrap>
      <Header />
      <div className="text-center">
        <h1>Home Page</h1>
      </div>
      <Footer />
    </HomeWrap>
  )
}
export default Home;

const HomeWrap = styled.div `

`;