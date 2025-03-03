import React from 'react';
import HomePage from './HomePage';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <HomePage />
        </ErrorBoundary>
    );
};

export default App; 