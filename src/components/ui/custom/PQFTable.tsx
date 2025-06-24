/* src\components\ui\custom\PQFTable.tsx */

import React from 'react';

const PQFTable = () => {
  return (
    <div className="overflow-x-auto my-8 rounded-lg shadow-lg">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-purple-700 to-purple-800">
            <th className="px-6 py-4 text-left text-white font-semibold border-b">PQF Level</th>
            <th className="px-6 py-4 text-left text-white font-semibold border-b">Academic Qualifications</th>
            <th className="px-6 py-4 text-left text-white font-semibold border-b">Micro-Credentials</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-purple-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap">Level 8</td>
            <td className="px-6 py-4 whitespace-nowrap">Doctoral</td>
            <td className="px-6 py-4">Fewer units than doctoral coursework</td>
          </tr>
          <tr className="hover:bg-purple-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap">Level 7</td>
            <td className="px-6 py-4 whitespace-nowrap">Master&apos;s</td>
            <td className="px-6 py-4">Fewer units than postgraduate diploma</td>
          </tr>
          <tr className="hover:bg-purple-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap">Level 6</td>
            <td className="px-6 py-4 whitespace-nowrap">Bachelor&apos;s</td>
            <td className="px-6 py-4" rowSpan={2}>Fewer units than associate degree</td>
          </tr>
          <tr className="hover:bg-purple-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap">Level 5</td>
            <td className="px-6 py-4 whitespace-nowrap">Associate Degree</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PQFTable;