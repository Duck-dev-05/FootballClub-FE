import { useState, useEffect } from 'react';

// This would typically come from an API, but for now we'll use sample data
const sampleMatchData = {
    id: 1,
    competition: 'Youth League',
    matchDate: '2024-03-15T15:00:00',
    status: 'FT',
    homeTeam: 'FC ESCUELA',
    awayTeam: 'THPT Chu Văn An',
    homeTeamLogo: '/logos/fc-escuela.png',
    awayTeamLogo: '/logos/thpt-chu-van-an.png',
    homeScore: 3,
    awayScore: 1,
    homeLineup: {
        starting: [
            { name: 'Nguyễn Thành Đạt', position: 'GK', number: 1 },
            { name: 'Lê Vũ Nhật Minh', position: 'RB', number: 2 },
            { name: 'Nguyễn Đỗ Bảo Khánh', position: 'CB', number: 4 },
            { name: 'Nguyễn Đức Bảo Phong', position: 'LB', number: 3 },
            { name: 'Vũ Nhật Ninh', position: 'RB', number: 5 },
            { name: 'Phạm Công Toàn', position: 'LB', number: 6 },
            { name: 'Hoàng Đặng Việt Hùng', position: 'CMF', number: 8, captain: true },
            { name: 'Đỗ Quốc Khánh', position: 'AMF', number: 10 },
            { name: 'Phạm Anh Phương', position: 'SS', number: 11 },
            { name: 'Nguyễn Quang Minh Thành', position: 'SS', number: 9 },
            { name: 'Đặng Minh Việt', position: 'CF', number: 7 }
        ],
        substitutes: [
            { name: 'Trần Minh Đức', position: 'CF', number: 20 },
            { name: 'Lê Minh Tuấn', position: 'GK', number: 13 },
            { name: 'Nguyễn Văn Hùng', position: 'MF', number: 14 },
            { name: 'Trần Văn Nam', position: 'DF', number: 15 },
            { name: 'Phạm Minh Đức', position: 'FW', number: 16 },
            { name: 'Lê Quang Huy', position: 'MF', number: 17 },
            { name: 'Nguyễn Đức Anh', position: 'DF', number: 18 }
        ]
    },
    awayLineup: {
        starting: [
            { name: 'Trần Văn Thắng', position: 'GK', number: 1 },
            { name: 'Lê Minh Quân', position: 'RB', number: 2 },
            { name: 'Nguyễn Đức Thịnh', position: 'CB', number: 4 },
            { name: 'Phạm Bá Hưng', position: 'CB', number: 5 },
            { name: 'Đỗ Huy Hoàng', position: 'LB', number: 3 },
            { name: 'Nguyễn Quang Huy', position: 'CDM', number: 6 },
            { name: 'Trần Đức Anh', position: 'CM', number: 8 },
            { name: 'Lê Quang Khải', position: 'CAM', number: 10 },
            { name: 'Phạm Minh Đức', position: 'LW', number: 11 },
            { name: 'Nguyễn Công Thành', position: 'ST', number: 9 },
            { name: 'Hoàng Minh Tuấn', position: 'RW', number: 7 }
        ],
        substitutes: [
            { name: 'Nguyễn Văn Long', position: 'GK', number: 12 },
            { name: 'Trần Quốc Bảo', position: 'DF', number: 13 },
            { name: 'Lê Thành Nam', position: 'MF', number: 14 },
            { name: 'Đỗ Văn Đức', position: 'FW', number: 15 },
            { name: 'Phạm Quang Hải', position: 'MF', number: 16 },
            { name: 'Nguyễn Hữu Thắng', position: 'DF', number: 17 }
        ]
    },
    events: [
        {
            time: 15,
            type: 'goal',
            team: 'home',
            player: 'Nguyễn Quang Minh Thành',
            assist: 'Đỗ Quốc Khánh',
            description: 'Powerful shot from outside the box'
        },
        {
            time: 34,
            type: 'yellow',
            team: 'home',
            player: 'Lê Vũ Nhật Minh',
            description: 'Tactical foul'
        },
        {
            time: 56,
            type: 'goal',
            team: 'home',
            player: 'Đỗ Quốc Khánh',
            assist: 'Phạm Anh Phương',
            description: 'Beautiful team goal'
        },
        {
            time: 67,
            type: 'substitution',
            team: 'home',
            player: 'Trần Minh Đức',
            description: 'Replaces Nguyễn Quang Minh Thành'
        },
        {
            time: 78,
            type: 'goal',
            team: 'away',
            player: 'Nguyễn Công Thành',
            assist: 'Lê Quang Khải',
            description: 'Consolation goal from a quick counter-attack'
        },
        {
            time: 85,
            type: 'goal',
            team: 'home',
            player: 'Trần Minh Đức',
            assist: 'Đỗ Quốc Khánh',
            description: 'Header from close range'
        }
    ],
    stats: {
        possession: { home: 65, away: 35 },
        shots: { home: 18, away: 7 },
        shotsOnTarget: { home: 8, away: 3 },
        corners: { home: 7, away: 2 }
    },
    summary: 'A dominant performance from FC ESCUELA saw them secure a comfortable 3-1 victory against THPT Chu Văn An. The home team controlled possession and created numerous chances throughout the match, with standout performances from Đỗ Quốc Khánh and Nguyễn Quang Minh Thành.',
    keyMoments: [
        '15\' - Opening goal from Nguyễn Quang Minh Thành',
        '34\' - Tactical yellow card for Lê Vũ Nhật Minh',
        '56\' - Beautiful team goal finished by Đỗ Quốc Khánh',
        '67\' - Strategic substitution: Trần Minh Đức comes on',
        '78\' - Consolation goal for THPT Chu Văn An',
        '85\' - Trần Minh Đức seals the victory with a header'
    ]
};

export const useMatchData = (matchId) => {
    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatchData = async () => {
            try {
                setLoading(true);
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // For now, return sample data
                // In production, this would be an API call
                if (matchId === '1') {
                    setMatch(sampleMatchData);
                } else {
                    throw new Error('Match not found');
                }
                
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (matchId) {
            fetchMatchData();
        }
    }, [matchId]);

    return { match, loading, error };
}; 