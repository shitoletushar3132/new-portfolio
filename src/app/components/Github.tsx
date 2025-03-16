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
      (total, [/* ignored */, count]) => total + count,
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
        <GitHubCalendar username="shitoletushar3132" year={year} />
      </div>

      <a
        className="flex items-center flex-wrap gap-8 px-4 py-3 bg-gray-800/50 rounded-lg mt-5 cursor-pointer"
        href="https://github.com/shitoletushar3132"
        target="__blank"
      >
        <div className="flex items-center gap-2">
          <div className="p-1 bg-emerald-900/30 rounded">
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="fill-emerald-500"
            >
              <path d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
            </svg>
          </div>
          <span className="font-semibold">{userStats.contributions}</span>
          <span className="text-gray-400">contributions</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-400" />
          <span className="font-semibold">{userStats.followers}</span>
          <span className="text-gray-400">followers</span>
        </div>

        <div className="flex items-center gap-2">
          <GitPullRequest size={16} className="text-gray-400" />
          <span className="font-semibold">{userStats.pullRequests}</span>
          <span className="text-gray-400">Pull Requests</span>
        </div>
      </a>
    </div>
  );
};

export default GitHubStats;
