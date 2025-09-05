"use client";

import OpenSource from "../components/ui/open-source";

export default function OpenScDemo() {
  return (
    <OpenSource
      repository="TheRaj71/Crowdsourced-Civic-lssue-Reporting-and-Resolution-System"
      defaultStats={{
        contributors: [
          {
            login: "Raj",
            avatar_url: "https://avatars.githubusercontent.com/u/143867566?v=4",
          },
          {
            login: "Parth",
            avatar_url: "https://avatars.githubusercontent.com/u/144694982?v=4",
          },
          {
            login: "Rishav",
            avatar_url: "https://avatars.githubusercontent.com/u/146652774?v=4",
          },
          {
            login: "Sudhir",
            avatar_url: "https://avatars.githubusercontent.com/u/45678901?v=4",
          },
          {
            login: "Savita",
            avatar_url: "https://avatars.githubusercontent.com/u/56789012?v=4",
          },
          {
            login: "Anurag Anand",
            avatar_url: "https://avatars.githubusercontent.com/u/67890123?v=4",
          },
        ],
      }}
    />
  );
}
