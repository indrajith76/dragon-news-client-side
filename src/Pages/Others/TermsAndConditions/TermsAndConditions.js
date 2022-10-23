import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is Terms and Conditions</h2>
            <h4>Go Back to <Link to='/register'>Register</Link></h4>
        </div>
    );
};

export default TermsAndConditions;