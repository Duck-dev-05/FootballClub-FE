import React from 'react';
import './SeasonTickets.css';

const SeasonTickets = () => {
  const ticketPlans = [
    {
      name: "Standard",
      price: "299",
      features: [
        "All home league matches",
        "Reserved seating",
        "10% discount on merchandise",
        "Monthly newsletter",
        "Digital match program"
      ],
      recommended: false
    },
    {
      name: "Premium",
      price: "499",
      features: [
        "All home matches (including cups)",
        "Premium seating",
        "20% discount on merchandise",
        "Access to member events",
        "Free parking",
        "Digital & printed match program",
        "Priority ticket booking for away matches"
      ],
      recommended: true
    },
    {
      name: "VIP",
      price: "899",
      features: [
        "All home & priority away matches",
        "VIP lounge access",
        "30% discount on merchandise",
        "Exclusive events & meet players",
        "Premium parking",
        "Complimentary refreshments",
        "Personal concierge service",
        "Annual dinner with the team"
      ],
      recommended: false
    }
  ];

  return (
    <div className="season-tickets-container">
      <h1>Season Tickets 2024/25</h1>
      <p className="season-description">
        Join us for an exciting season of football with our range of season ticket packages.
        Choose the perfect plan that suits your needs and enjoy exclusive benefits throughout the season.
      </p>

      <div className="ticket-plans-grid">
        {ticketPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`ticket-plan ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && (
              <div className="recommended-badge">
                MOST POPULAR
              </div>
            )}
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <div className="price">
                <span className="currency">£</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/season</span>
              </div>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="purchase-button">
              Select {plan.name} Plan
            </button>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <h3>Important Information</h3>
        <ul>
          <li>Season tickets are non-transferable</li>
          <li>Payment plans available (subject to terms)</li>
          <li>Early bird discounts available until July 1st</li>
          <li>Junior and senior citizen discounts available</li>
        </ul>
      </div>
    </div>
  );
};

export default SeasonTickets; 