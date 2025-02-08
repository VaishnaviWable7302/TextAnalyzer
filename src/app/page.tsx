"use client";
import TextAnalyzer from "./components/textAnalyzer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Text Analyzer
        </h1>
        <TextAnalyzer />
      </div>
    </div>
  );
}
