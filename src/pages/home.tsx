import React from 'react';
import './home.scss';
import background from '../images/background.jpg';
import {Chart1} from '../components/Chart-1'
import {Chart2} from '../components/Chart-2';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home" style={{backgroundImage: `URL(${background})`}}>
      <div className="wrapper">
        <header className="bordered">
          某零售集团运营大屏
        </header>
        <main>
          <section className="bordered section1">
            <Chart1/>
            <Chart2/>
          </section>
          <section className=" bordered section2"></section>
          <section className="bordered section3"></section>
        </main>
        <footer>
          &copy; czc2222 2020-{year}
        </footer>

      </div>
    </div>
  );
};
