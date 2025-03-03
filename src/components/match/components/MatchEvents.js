import React from 'react';
import { FaFutbol, FaExchangeAlt, FaSquare, FaTimesCircle } from 'react-icons/fa';
import { GiWhistle } from 'react-icons/gi';
import './MatchEvents.css';

const EventIcon = ({ type }) => {
    switch (type) {
        case 'goal':
            return <FaFutbol className="event-icon goal" />;
        case 'yellow':
            return <FaSquare className="event-icon yellow" />;
        case 'red':
            return <FaSquare className="event-icon red" />;
        case 'substitution':
            return <FaExchangeAlt className="event-icon substitution" />;
        case 'var':
            return <FaTimesCircle className="event-icon var" />;
        case 'injury':
            return <GiWhistle className="event-icon injury" />;
        default:
            return null;
    }
};

const MatchEvent = ({ event }) => {
    return (
        <div className="match-event">
            <div className="event-time">{event.time}'</div>
            <div className="event-content">
                <EventIcon type={event.type} />
                <div className="event-details">
                    <div className="event-player">{event.player}</div>
                    {event.assist && (
                        <div className="event-assist">
                            Assist: {event.assist}
                        </div>
                    )}
                    {event.description && (
                        <div className="event-description">
                            {event.description}
                        </div>
                    )}
                    {event.replaced && (
                        <div className="event-replaced">
                            Out: {event.replaced}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MatchEvents = ({ events }) => {
    const firstHalfEvents = events.filter(event => parseInt(event.time) <= 45);
    const secondHalfEvents = events.filter(event => parseInt(event.time) > 45);

    return (
        <div className="match-events">
            <h3>Match Events</h3>
            <div className="events-container">
                <div className="half">
                    <h4>First Half</h4>
                    <div className="events-timeline">
                        {firstHalfEvents.map((event, index) => (
                            <MatchEvent key={index} event={event} />
                        ))}
                    </div>
                </div>
                <div className="half">
                    <h4>Second Half</h4>
                    <div className="events-timeline">
                        {secondHalfEvents.map((event, index) => (
                            <MatchEvent key={index} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchEvents; 