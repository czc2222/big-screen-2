import React from 'react';
import './home.scss';
import background from '../images/background.jpg';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home" style={{backgroundImage: `URL(${background})`}}>
      <div className="wrapper">
        <header className="bordered">
          某零售集团运营大屏
        </header>
        <main>
          <section className="section1">

          </section>
          <section className="section2"></section>
          <section className="section3"></section>
        </main>
        <footer>
          &copy; czc2222 2020-{year}
        </footer>

      </div>
    </div>
  );
};
