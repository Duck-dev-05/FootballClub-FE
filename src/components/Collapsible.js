import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible">
            <h3 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
                {title} {isOpen ? '−' : '+'}
            </h3>
            {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
    );
};

Collapsible.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapsible; 