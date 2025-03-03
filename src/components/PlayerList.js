import React from 'react';
import Player from './Player';

const PlayerList = ({ players }) => {
    return (
        <div>
            {players.map((player) => (
                <Player key={player.name} player={player} />
            ))}
        </div>
    );
};

export default PlayerList; 