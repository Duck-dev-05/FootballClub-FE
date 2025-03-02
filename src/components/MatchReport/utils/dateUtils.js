export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
    return timeString.includes("'") ? timeString : `${timeString}'`;
};

export const getMatchStatus = (startTime, currentTime = new Date()) => {
    const matchStart = new Date(startTime);
    const diffInMinutes = Math.floor((currentTime - matchStart) / (1000 * 60));

    if (diffInMinutes < 0) {
        return 'Upcoming';
    }

    if (diffInMinutes <= 45) {
        return `${diffInMinutes}'`;
    }

    if (diffInMinutes > 45 && diffInMinutes < 60) {
        return 'HT';
    }

    if (diffInMinutes >= 60 && diffInMinutes <= 105) {
        return `${diffInMinutes - 15}'`;
    }

    return 'FT';
};

export const sortMatchesByDate = (matches) => {
    return [...matches].sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate));
}; 