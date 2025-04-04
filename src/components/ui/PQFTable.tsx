import React from 'react';

const PQFTable = () => {
  return (
    <div className="pqf-table-container fade-in-view">
      <table className="pqf-table">
        <thead>
          <tr>
            <th>PQF Level</th>
            <th>Academic Qualifications</th>
            <th>Micro-Credentials</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level 8</td>
            <td>Doctoral</td>
            <td>Fewer units than doctoral coursework</td>
          </tr>
          <tr>
            <td>Level 7</td>
            <td>Master&apos;s</td>
            <td>Fewer units than postgraduate diploma</td>
          </tr>
          <tr>
            <td>Level 6</td>
            <td>Bachelor&apos;s</td>
            <td rowSpan={2}>Fewer units than associate degree</td>
          </tr>
          <tr>
            <td>Level 5</td>
            <td>Associate Degree</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PQFTable;