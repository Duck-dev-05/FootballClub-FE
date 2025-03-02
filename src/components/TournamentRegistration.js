import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TournamentRegistration.css';

const TournamentRegistration = () => {
    const navigate = useNavigate();
    const { tournamentId } = useParams();
    const [formData, setFormData] = useState({
        teamName: '',
        ageGroup: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        teamSize: '',
        previousTournaments: '',
        specialRequirements: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const ageGroups = ['U12', 'U14', 'U16', 'U18'];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
        if (!formData.ageGroup) newErrors.ageGroup = 'Age group is required';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number format';
        }
        if (!formData.teamSize.trim()) {
            newErrors.teamSize = 'Team size is required';
        } else if (isNaN(formData.teamSize) || parseInt(formData.teamSize) < 11 || parseInt(formData.teamSize) > 18) {
            newErrors.teamSize = 'Team size must be between 11 and 18 players';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            try {
                // Simulated API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSubmitSuccess(true);
                setTimeout(() => {
                    navigate('/matches/tournaments');
                }, 2000);
            } catch (error) {
                setErrors({ submit: 'Failed to submit registration. Please try again.' });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    if (submitSuccess) {
        return (
            <div className="registration-success">
                <div className="success-content">
                    <h2>Registration Successful!</h2>
                    <p>Thank you for registering for the tournament.</p>
                    <p>You will receive a confirmation email shortly with further details.</p>
                    <div className="success-actions">
                        <button onClick={() => navigate('/matches/tournaments')}>
                            Return to Tournaments
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="tournament-registration">
            <header className="registration-header">
                <h1>Tournament Registration</h1>
                <p>Complete the form below to register your team</p>
            </header>

            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-section">
                    <h2>Team Information</h2>
                    <div className="form-group">
                        <label htmlFor="teamName">Team Name *</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            className={errors.teamName ? 'error' : ''}
                        />
                        {errors.teamName && <span className="error-message">{errors.teamName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="ageGroup">Age Group *</label>
                        <select
                            id="ageGroup"
                            name="ageGroup"
                            value={formData.ageGroup}
                            onChange={handleInputChange}
                            className={errors.ageGroup ? 'error' : ''}
                        >
                            <option value="">Select Age Group</option>
                            {ageGroups.map(group => (
                                <option key={group} value={group}>{group}</option>
                            ))}
                        </select>
                        {errors.ageGroup && <span className="error-message">{errors.ageGroup}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="teamSize">Number of Players *</label>
                        <input
                            type="number"
                            id="teamSize"
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                            min="11"
                            max="18"
                            className={errors.teamSize ? 'error' : ''}
                        />
                        {errors.teamSize && <span className="error-message">{errors.teamSize}</span>}
                    </div>
                </div>

                <div className="form-section">
                    <h2>Contact Information</h2>
                    <div className="form-group">
                        <label htmlFor="contactPerson">Contact Person *</label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            className={errors.contactPerson ? 'error' : ''}
                        />
                        {errors.contactPerson && <span className="error-message">{errors.contactPerson}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Team Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="3"
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>Additional Information</h2>
                    <div className="form-group">
                        <label htmlFor="previousTournaments">Previous Tournament Experience</label>
                        <textarea
                            id="previousTournaments"
                            name="previousTournaments"
                            value={formData.previousTournaments}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="List any previous tournaments your team has participated in"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="specialRequirements">Special Requirements</label>
                        <textarea
                            id="specialRequirements"
                            name="specialRequirements"
                            value={formData.specialRequirements}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Any special requirements or requests"
                        />
                    </div>
                </div>

                {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

                <div className="form-actions">
                    <button 
                        type="button" 
                        className="cancel-button"
                        onClick={() => navigate('/matches/tournaments')}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TournamentRegistration; 