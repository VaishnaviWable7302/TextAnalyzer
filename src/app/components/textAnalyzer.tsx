"use client";
import { useState } from "react";

export default function TextAnalyzer() {
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition"
        rows={6}
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-between text-sm bg-gray-200 p-3 rounded-md">
        <span className="font-semibold">Words: {wordCount}</span>
        <span className="font-semibold">Characters: {charCount}</span>
      </div>
    </div>
  );
}
