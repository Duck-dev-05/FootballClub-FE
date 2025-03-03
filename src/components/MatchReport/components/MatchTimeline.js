import React from 'react';
import { Link } from 'react-router-dom';

const EventIcon = ({ type }) => {
    const icons = {
        goal: '⚽',
        yellow: '🟨',
        red: '🟥',
        substitution: '↔️',
        injury: '🚑',
    };
    return <span className="event-icon">{icons[type] || '•'}</span>;
};

const TimelineEvent = ({ event, isHomeTeam }) => (
    <div className={`event ${event.type} ${isHomeTeam ? 'home-event' : 'away-event'}`}>
        <div className="event-content">
            <span className="time">{event.time}'</span>
            <EventIcon type={event.type} />
            <div className="event-details">
                <Link 
                    to={`/team/${event.team.toLowerCase().replace(/\s+/g, '-')}/player/${event.player.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="player-link"
                >
                    <span className="team-name">{event.team}</span>
                    <span className="player-name">{event.player}</span>
                </Link>
                <span className="description">{event.description}</span>
            </div>
        </div>
    </div>
);

const HalfTimeline = ({ events, homeTeam, title }) => {
    const homeEvents = events.filter(event => event.team === homeTeam);
    const awayEvents = events.filter(event => event.team !== homeTeam);

    return (
        <div className="half">
            <h4>{title}</h4>
            <div className="events-container">
                <div className="home-events">
                    {homeEvents.map((event, index) => (
                        <TimelineEvent 
                            key={`home-${index}`} 
                            event={event} 
                            isHomeTeam={true}
                        />
                    ))}
                </div>
                <div className="timeline-divider"></div>
                <div className="away-events">
                    {awayEvents.map((event, index) => (
                        <TimelineEvent 
                            key={`away-${index}`} 
                            event={event} 
                            isHomeTeam={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const MatchTimeline = ({ events, homeTeam, awayTeam }) => {
    const eventIcons = {
        goal: '⚽',
        yellow: '🟨',
        red: '🟥',
        substitution: '🔄',
        injury: '🚑',
        var: '📺'
    };

    return (
        <section className="match-timeline">
            <h3>Match Timeline</h3>
            <div className="timeline-container">
                <div className="timeline-periods">
                    <span className="period">First Half</span>
                    <span className="period">Second Half</span>
                </div>
                <div className="events-list">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className={`event-item ${event.type} ${event.team}-event`}
                        >
                            <div className="event-time">
                                {event.time}'
                                {event.addedTime && <span className="added-time">+{event.addedTime}</span>}
                            </div>
                            <div className="event-icon" title={event.type}>
                                {eventIcons[event.type] || '•'}
                            </div>
                            <div className="event-details">
                                <strong>{event.player}</strong>
                                <span className="event-description">{event.description}</span>
                                {event.assist && (
                                    <span className="assist">
                                        Assist: <strong>{event.assist}</strong>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MatchTimeline; 