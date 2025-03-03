import React, { useState } from 'react';
import './BuyTickets.css'; // Import the CSS file

const TicketOption = ({ value, checked, onChange, label }) => (
    <div className="ticket-option">
        <label>
            <input 
                type="radio" 
                value={value} 
                checked={checked} 
                onChange={onChange} 
            />
            {label}
        </label>
    </div>
);

const PaymentOption = ({ value, checked, onChange, label }) => (
    <div className="payment-option">
        <label>
            <input 
                type="radio" 
                value={value} 
                checked={checked} 
                onChange={onChange} 
            />
            {label}
        </label>
    </div>
);

const BuyTickets = () => {
    const [ticketType, setTicketType] = useState('single'); // Default to single match ticket
    const [paymentMethod, setPaymentMethod] = useState('credit'); // Default to credit card

    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className="buy-tickets-container">
            <h1>Buy Tickets</h1>
            <p>Select your tickets below:</p>
            <div>
                <TicketOption 
                    value="single" 
                    checked={ticketType === 'single'} 
                    onChange={handleTicketTypeChange} 
                    label="Buy 1 Match Ticket" 
                />
                <TicketOption 
                    value="membership" 
                    checked={ticketType === 'membership'} 
                    onChange={handleTicketTypeChange} 
                    label="Buy Membership" 
                />
            </div>
            {ticketType === 'single' && (
                <div className="ticket-details">
                    <h2>Single Match Ticket</h2>
                    {/* Add logic for single match ticket purchase */}
                </div>
            )}
            {ticketType === 'membership' && (
                <div className="ticket-details">
                    <h2>Membership</h2>
                    {/* Add logic for membership purchase */}
                </div>
            )}
            <h2>Payment Method</h2>
            <div>
                <PaymentOption 
                    value="credit" 
                    checked={paymentMethod === 'credit'} 
                    onChange={handlePaymentMethodChange} 
                    label="Pay with Credit Card" 
                />
                <PaymentOption 
                    value="paypal" 
                    checked={paymentMethod === 'paypal'} 
                    onChange={handlePaymentMethodChange} 
                    label="Pay with PayPal" 
                />
            </div>
            {paymentMethod === 'credit' && (
                <div className="payment-details">
                    <h3>Credit Card Details</h3>
                    <form>
                        <label>
                            Card Number:
                            <input type="text" placeholder="1234 5678 9012 3456" required />
                        </label>
                        <label>
                            Expiration Date:
                            <input type="text" placeholder="MM/YY" required />
                        </label>
                        <label>
                            CVV:
                            <input type="text" placeholder="123" required />
                        </label>
                    </form>
                </div>
            )}
            {paymentMethod === 'paypal' && (
                <div className="payment-details">
                    <h3>PayPal Payment</h3>
                    <p>You will be redirected to PayPal to complete your purchase.</p>
                </div>
            )}
        </div>
    );
};

export default BuyTickets; 