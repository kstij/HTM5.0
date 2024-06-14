import React from 'react';
import Countdown from 'react-countdown';
import './CountdownTimer.css'; // Import CSS for CountdownTimer styling

const CountdownTimer = () => {
    const hackathonDate = new Date('2024-06-20T00:00:00').getTime();

    // Renderer function for Countdown component
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render something when countdown is complete
            return <span>Hackathon has started!</span>;
        } else {
            // Render a countdown timer
            return (
                <div className="countdown-box">
                    <h2>Countdown to Hackathon</h2>
                    <div className="countdown-wrapper">
                        <div className="countdown-item">
                            <span className="count">{days}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{hours}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{minutes}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{seconds}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="countdown">
            <Countdown date={hackathonDate} renderer={renderer} />
        </div>
    );
};

export default CountdownTimer;
