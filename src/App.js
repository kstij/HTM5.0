import React from 'react';
import './App.css';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import ScheduleList from './components/ScheduleList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Header />
            <CountdownTimer />
            <ScheduleList/>
            <Footer />
        </div>
    );
};

export default App;
