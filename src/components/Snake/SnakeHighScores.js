import React from 'react';

const Snake = ({highScores}) => {

    return (
        <div className="mt-2">
            <h4 style={{ textAlign: 'center' }}>High Scores</h4>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Score</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {highScores.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.score}</td>
                                <td>{item.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Snake;