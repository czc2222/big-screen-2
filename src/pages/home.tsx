import React from 'react';
import './home.scss';
import background from '../images/background.jpg';
import {Chart1} from '../components/Chart-1'
import {Chart2} from '../components/Chart-2';
import {Chart3} from '../components/Chart-3';
import {Chart4} from '../components/Chart-4';
import {Chart5} from '../components/Chart-5';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home" style={{backgroundImage: `URL(${background})`}}>
      <div className="wrapper">
        <header className="bordered">
          某零售集团运营大屏
        </header>
        <main>
          <section className=" section1">
            <Chart1/>
            <Chart2/>
            <Chart3/>
          </section>
          <section className=" bordered section2">
            <Chart4/>
            <Chart5/>
          </section>
          <section className="bordered section3"></section>
        </main>
        <footer>
          &copy; czc2222 2020-{year}
        </footer>

      </div>
    </div>
  );
};
