import React from 'react';
import Slider from './Slider';
// import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <main>
            <Slider />

            <div className="cards">
                <div className="cards--text">
                    <h2>Shop Instruments</h2>
                    <p>New Instruments Available</p>
                    <a href="/products"><button>See What's New</button></a>
                </div>
                <img className="cards--img" src="img/guitar--transparent.png" alt="black electric guitar" />
            </div>
            <div className="cards">
                <div className="cards--text">
                    <h2>Shop Amps</h2>
                    <a href="/products"><button>View All</button></a>
                </div>
                <img className="cards--img" src="img/guitarAmp--transparent.png" alt="fender guitar amp" />
            </div>
            <div className="cards">
                <div className="cards--text">
                    <h2>Shop Guitar Accessories</h2>
                    <a href="/products"><button>View All</button></a>
                </div>
                <img className="cards--img" src="img/transparent--case.png" alt="guitar case" />
            </div>
        </main>
    );
};

export default Home;