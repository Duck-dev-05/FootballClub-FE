export const matchesData = [
    {
        id: 1,
        homeTeam: 'FC Escuela',
        awayTeam: 'Valencia Academy',
        homeScore: 4,
        awayScore: 1,
        matchDate: '2024-03-15T15:00:00',
        competition: 'Youth League',
        events: [
            { 
                time: '23',
                type: 'goal',
                player: 'Nguyễn Quang Minh Thành',
                description: 'Beautiful strike from outside the box',
                assist: 'Đỗ Quốc Khánh'
            },
            { 
                time: '34',
                type: 'yellow',
                player: 'R. Garcia',
                description: 'Tactical foul'
            },
            { 
                time: '45',
                type: 'goal',
                player: 'Đặng Minh Việt',
                description: 'Header from corner',
                assist: 'Hoàng Đặng Việt Hùng'
            },
            { 
                time: '67',
                type: 'goal',
                player: 'L. Torres',
                description: 'Counter attack'
            },
            { 
                time: '78',
                type: 'goal',
                player: 'Phạm Anh Phương',
                description: 'Penalty kick'
            }
        ],
        stats: {
            possession: { home: 58, away: 42 },
            shots: { home: 15, away: 8 },
            shotsOnTarget: { home: 8, away: 3 },
            corners: { home: 7, away: 4 }
        },
        summary: {
            text: "FC Escuela dominated the match with an impressive display of attacking football, showcasing their technical prowess and tactical superiority throughout the game.",
            keyMoments: [
                "23' - Brilliant long-range strike by Nguyễn Quang Minh Thành",
                "45' - Perfect header from Đặng Minh Việt",
                "78' - Clinical penalty conversion by Phạm Anh Phương"
            ]
        }
    },
    {
        id: 2,
        homeTeam: 'Barcelona Academy',
        awayTeam: 'FC Escuela',
        homeScore: 2,
        awayScore: 3,
        matchDate: '2024-03-08T15:00:00',
        competition: 'Youth Champions Cup',
        events: [
            {
                time: '15',
                type: 'goal',
                player: 'C. Rodriguez',
                description: 'Volley from edge of the box'
            },
            {
                time: '34',
                type: 'goal',
                player: 'Đỗ Quốc Khánh',
                description: 'Free kick into top corner',
                assist: 'Foul drawn by Phạm Anh Phương'
            },
            {
                time: '45+2',
                type: 'yellow',
                player: 'M. Garcia',
                description: 'Late challenge'
            },
            {
                time: '56',
                type: 'substitution',
                player: 'Trần Minh Đức',
                description: 'Tactical change',
                replaced: 'Đặng Minh Việt'
            },
            {
                time: '67',
                type: 'goal',
                player: 'L. Martinez',
                description: 'Header from corner'
            },
            {
                time: '75',
                type: 'goal',
                player: 'Trần Minh Đức',
                description: 'Solo run and finish',
                assist: 'Hoàng Đặng Việt Hùng'
            },
            {
                time: '89',
                type: 'goal',
                player: 'Nguyễn Quang Minh Thành',
                description: 'Counter-attack finish',
                assist: 'Đỗ Quốc Khánh'
            }
        ],
        stats: {
            possession: { home: 55, away: 45 },
            shots: { home: 12, away: 14 },
            shotsOnTarget: { home: 5, away: 8 },
            corners: { home: 6, away: 5 }
        },
        summary: {
            text: "A thrilling away victory for FC Escuela against Barcelona Academy, demonstrating remarkable resilience and tactical adaptability in a high-pressure environment.",
            keyMoments: [
                "34' - Spectacular free-kick by Đỗ Quốc Khánh",
                "75' - Incredible solo effort from substitute Trần Minh Đức",
                "89' - Decisive counter-attack goal by Nguyễn Quang Minh Thành"
            ]
        }
    },
    {
        id: 3,
        homeTeam: 'FC Escuela',
        awayTeam: 'Ajax Youth',
        homeScore: 2,
        awayScore: 2,
        matchDate: '2024-03-01T15:00:00',
        competition: 'International Friendly',
        events: [
            {
                time: '23',
                type: 'goal',
                player: 'J. van Dijk',
                description: 'Long-range effort'
            },
            {
                time: '31',
                type: 'injury',
                player: 'Vũ Nhật Ninh',
                description: 'Ankle injury, replaced by Phạm Công Toàn'
            },
            {
                time: '45',
                type: 'goal',
                player: 'Phạm Anh Phương',
                description: 'Equalizer from close range',
                assist: 'Nguyễn Quang Minh Thành'
            },
            {
                time: '67',
                type: 'var',
                player: 'K. de Jong',
                description: 'Goal disallowed for offside'
            },
            {
                time: '78',
                type: 'goal',
                player: 'Hoàng Đặng Việt Hùng',
                description: 'Powerful shot from distance'
            },
            {
                time: '90+3',
                type: 'goal',
                player: 'L. van der Berg',
                description: 'Last-minute equalizer'
            }
        ],
        stats: {
            possession: { home: 48, away: 52 },
            shots: { home: 11, away: 13 },
            shotsOnTarget: { home: 5, away: 6 },
            corners: { home: 5, away: 7 }
        },
        summary: {
            text: "An entertaining draw against Ajax Youth showcased FC Escuela's ability to compete with Europe's top academies. The team showed great character despite losing a key player to injury early in the match.",
            keyMoments: [
                "31' - Early setback with Vũ Nhật Ninh's injury",
                "45' - Crucial equalizer before halftime by Phạm Anh Phương",
                "78' - Spectacular strike from Hoàng Đặng Việt Hùng"
            ]
        }
    }
]; 