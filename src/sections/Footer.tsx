"use client";
import { useEffect, useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

interface Commit {
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
}

const footerLink = [
  {
    title: "Github",
    href: "https://github.com/akshayysuthar",
  },
  {
    title: "Discord",
    href: "https://discord.com/channels/@me",
  },
];

export const Footer = () => {
  const [lastCommit, setLastCommit] = useState<{
    message: string;
    date: string;
  } | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchLastCommit = async () => {
      const gitHubAPI =
        "https://api.github.com/repos/akshayysuthar/portfolio/commits/main"; // Replace with your repo
      try {
        const response = await fetch(gitHubAPI);
        if (!response.ok) throw new Error("Failed to fetch commit data");
        const data: Commit = await response.json();
        setLastCommit({
          message: data.commit.message,
          date: new Date(data.commit.committer.date).toLocaleDateString(),
        });
      } catch (error) {
        console.error("Error fetching commit data:", error);
      }
    };

    fetchLastCommit();
  }, []);

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {currentYear}. All rights reserved
          </div>
          {lastCommit && (
            <div className="text-white/40">
              My last commit: <strong>{lastCommit.message}</strong> on{" "}
              {lastCommit.date}
            </div>
          )}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <a
                className="inline-flex items-center gap-1.5"
                href={link.href}
                key={link.title}
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // For security reasons
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
