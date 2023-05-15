import React from 'react';

function TableData({ wordFrequencies }) {
  return (
    <div className='Table'>
      <h2>Word Frequencies</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {wordFrequencies.map(([word, frequency], index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{word}</td>
                <td>{frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
