import React, { useEffect, useState } from "react";
import { Users, GitPullRequest } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const [year, setYear] = useState(2025);
  const [userStats, setUserStats] = useState({
    contributions: 0,
    followers: 0,
    pullRequests: 0,
  });

  // Fetch user stats from GitHub API
  const fetchUserStats = async () => {
    const username = "shitoletushar3132";

    // Fetch contributions data
    const response1 = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    );
    const data1 = await response1.json();
    console.log(data1);
    // Assuming the response contains a list of contributions and you want to count them
    const totalContributions = Object.entries(data1?.total || {}).reduce(
      // @ts-expect-error: Type inference issue with Object.entries and numeric values
      (total, [, /* ignored */ count]) => total + count,
      0
    );

    // Fetch basic user data from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    // Set state with both contributions and GitHub user stats
    setUserStats({
      contributions: totalContributions,
      followers: data.followers,
      pullRequests: data.public_gists, // Replace with actual PR count if needed
    });
  };

  useEffect(() => {
    fetchUserStats();
  }, []);

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
