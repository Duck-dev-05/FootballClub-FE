import React from 'react';

const Player = ({ player }) => {
    return (
        <div>
            {/* Render player properties instead of the player object */}
            <h2>{player.name}</h2>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Rating: {player.rating}</p>
        </div>
    );
};

export default Player; 