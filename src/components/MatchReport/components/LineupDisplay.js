import React from 'react';
import './LineupDisplay.css';

const LineupDisplay = () => {
    const players = [
        { name: 'Nguyễn Thành Đạt', position: 'GK', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Lê Vũ Nhật Minh', position: 'CB', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Nguyễn Đỗ Bảo Khánh', position: 'CB', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Nguyễn Đức Bảo Phong', position: 'CB', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Vũ Nhật Ninh', position: 'RB', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Phạm Công Toàn', position: 'LB', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Hoàng Đặng Việt Hưng', position: 'CDM', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Đỗ Quốc Khánh', position: 'AMF', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Phạm Anh Phương', position: 'LW', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Nguyễn Quang Minh Thành', position: 'CF', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Đặng Minh Việt', position: 'RW', number: Math.floor(Math.random() * 30) + 1 },
        { name: 'Trần Minh Đức', position: 'CF', number: Math.floor(Math.random() * 30) + 1 }
    ];

    return (
        <div className="lineup-display">
            <div className="lineup-list">
                {players.map((player, index) => (
                    <div key={index} className="player-row">
                        <span className="player-number">#{player.number}</span>
                        <span className="player-name">{player.name}</span>
                        <span className="player-position">– {player.position}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LineupDisplay; 