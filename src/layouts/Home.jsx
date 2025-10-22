import React from 'react';
import Header from '../components/Header/Header';

const Home = () => {
    return (
        <div>
            <header> <Header></Header> </header>
            <main> 
                <section className="slider"></section>
                <section className="findtoy"></section>
                <section className="picksone"></section>
                <section className="recent"></section>
            </main>

        </div>
    );
};

export default Home;