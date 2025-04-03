import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const [year, setYear] = useState(2025);

  return (
    <div className="bg-gray-900 rounded-xl p-6 my-10 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">GitHub Contributions</h1>
        <select
          className="bg-gray-800 rounded px-3 py-1 text-sm border border-gray-700"
          value={year} // Bind the year value to the state
          onChange={(e) => setYear(Number(e.target.value))} // Update the year when the dropdown value changes
        >
          <option value={2025}>2025</option>
          <option value={2024}>2024</option>
        </select>
      </div>

      <div>
        <GitHubCalendar username="shitoletushar3132" year={"last"} />
      </div>
    </div>
  );
};

export default GitHubStats;
