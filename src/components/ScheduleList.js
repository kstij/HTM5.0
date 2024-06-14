import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const ScheduleList = () => {
    const schedule = [
        { time: '09:00 AM', event: 'Registration' },
        { time: '10:00 AM', event: 'Opening Ceremony' },
        { time: '11:00 AM', event: 'First Round Starts' },
        { time: '02:00 PM', event: 'Lunch Break' },
        { time: '03:00 PM', event: 'Final Round' },
        // Add more events as needed
    ];

    const timelineRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const timeline = timelineRef.current;
            const items = timeline.querySelectorAll('li');
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    item.classList.add('in-view');
                } else {
                    item.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger scroll handler once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="schedule">
            <h2>Schedule</h2>
            <div className="timeline">
                <ul ref={timelineRef}>
                    {schedule.map((item, index) => (
                        <li key={index}>
                            <div>
                                <time>{item.time}</time>
                                <div>
                                    <p>{item.event}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ScheduleList;
