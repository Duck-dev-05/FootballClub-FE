import React from 'react';

const MatchAnalysis = ({ summary, keyMoments }) => {
    return (
        <section className="match-analysis">
            <h3>Match Analysis</h3>
            <div className="analysis-content">
                <div className="match-summary">
                    <h4>Summary</h4>
                    <p>{summary}</p>
                </div>
                
                <div className="key-moments">
                    <h4>Key Moments</h4>
                    <ul>
                        {keyMoments.map((moment, index) => (
                            <li key={index}>{moment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MatchAnalysis; 