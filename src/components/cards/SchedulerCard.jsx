"use client";

import { useState } from "react";
import BentoCard from "../BentoCard";

/**
 * Composant de carte pour planifier un nouveau post
 */
export default function SchedulerCard() {
  const [postDate, setPostDate] = useState("");
  const [postTime, setPostTime] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);

  const handleSchedule = () => {
    if (postDate && postTime) {
      setIsScheduled(true);
      // Ici, on pourrait ajouter une logique pour envoyer les données à une API
    }
  };

  return (
    <BentoCard
      className="p-4 flex flex-col"
      gridArea="7 / 3 / 9 / 5"
      bgColor="bg-cream"
    >
      <h3 className="text-lg font-medium mb-3 text-left">Schedule Post</h3>

      {!isScheduled ? (
        <>
          <div className="mb-3">
            <label className="block text-left text-sm mb-1">Date</label>
            <input
              type="date"
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-sm mb-1">Time</label>
            <input
              type="time"
              value={postTime}
              onChange={(e) => setPostTime(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
            />
          </div>

          <button
            onClick={handleSchedule}
            disabled={!postDate || !postTime}
            className={`mt-auto bg-purple text-white py-2 px-4 rounded-md ${
              !postDate || !postTime
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-90"
            }`}
          >
            Schedule Now
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-medium">Post Scheduled!</p>
          <p className="text-sm text-gray-600 mt-1">
            {postDate} at {postTime}
          </p>
          <button
            onClick={() => setIsScheduled(false)}
            className="mt-4 text-sm text-purple underline"
          >
            Schedule another
          </button>
        </div>
      )}
    </BentoCard>
  );
}
