import React from 'react';

const ResetButton = ({ resetGame }) => {
    return (
        <button type="button" onClick={resetGame} className="btn btn-secondary">Restart</button>
    );
};

export default ResetButton;