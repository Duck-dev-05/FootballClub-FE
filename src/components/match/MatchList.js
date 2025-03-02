import React, { useState, useMemo } from 'react';
import MatchCard from './components/MatchCard';
import './MatchList.css';

const CompetitionFilter = ({ competitions, selected, onSelect }) => (
    <div className="competition-filter">
        <button 
            className={`filter-button ${selected === 'all' ? 'active' : ''}`}
            onClick={() => onSelect('all')}
        >
            All Matches
        </button>
        {competitions.map(competition => (
            <button
                key={competition}
                className={`filter-button ${selected === competition ? 'active' : ''}`}
                onClick={() => onSelect(competition)}
            >
                {competition}
            </button>
        ))}
    </div>
);

const MatchList = ({ matches, teamLogos }) => {
    const [selectedCompetition, setSelectedCompetition] = useState('all');

    const competitions = useMemo(() => {
        const uniqueCompetitions = new Set(matches.map(match => match.competition));
        return Array.from(uniqueCompetitions);
    }, [matches]);

    const filteredMatches = useMemo(() => {
        if (selectedCompetition === 'all') {
            return matches;
        }
        return matches.filter(match => match.competition === selectedCompetition);
    }, [matches, selectedCompetition]);

    return (
        <div className="match-list">
            <div className="match-list-header">
                <h2>Match Results</h2>
                <CompetitionFilter
                    competitions={competitions}
                    selected={selectedCompetition}
                    onSelect={setSelectedCompetition}
                />
            </div>

            <div className="matches-container">
                {filteredMatches.length > 0 ? (
                    filteredMatches.map(match => (
                        <MatchCard
                            key={match.id}
                            match={match}
                            teamLogos={teamLogos}
                        />
                    ))
                ) : (
                    <div className="no-matches">
                        <p>No matches found for the selected competition.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchList; 