import React, { useState } from 'react';
import axios from 'axios';

const ResumeATSChecker: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [improvementPoints, setImprovementPoints] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      if (!selectedFile.name.endsWith('.pdf')) {
        setErrorMessage("Only PDF files are allowed.");
        return;
      }
      setFile(selectedFile);
      uploadResume(selectedFile);
    }
  };

  const uploadResume = async (resume: File) => {
    setLoading(true);
    setScore(null);
    setImprovementPoints([]);
    setErrorMessage(null);

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const res = await axios.post('https://creercraftbackend-mongouri.up.railway.app/api/resume/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const rawContent = res.data.result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawContent) throw new Error("Invalid response from server.");

      const cleanedJsonString = rawContent.replace(/```json\n?/, '').replace(/```$/, '');
      const parsedData = JSON.parse(cleanedJsonString);

      const { ats_score, improvement_points, file_validation, review } = parsedData;

      if (file_validation?.toLowerCase().includes("not the correct file")) {
        setErrorMessage(review || "The uploaded file is not a valid resume.");
        return;
      }

      const numericScore = parseInt(ats_score?.toString().replace('%', '') || '0');
      setScore(numericScore);
      setImprovementPoints(improvement_points || []);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8EC] p-6">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume ATS Checker</h1>
        <p className="text-lg text-gray-600">
          Upload your resume to check its compatibility with Applicant Tracking Systems (ATS).
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!file && (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF format only</p>
              </div>
              <input id="dropzone-file" type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        )}

        {loading && (
          <div className="mt-6 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-300 border-dashed rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">Analyzing your resume...</p>
          </div>
        )}

        {errorMessage && (
          <div className="mt-6 bg-red-100 text-red-700 border border-red-400 rounded p-4 text-center transition-opacity duration-300">
            <strong>Error:</strong> {errorMessage}
          </div>
        )}

        {score !== null && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your ATS Score</h2>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden mb-3">
              <div
                className={`h-full ${
                  score >= 70 ? 'bg-green-500' : score >= 40 ? 'bg-yellow-400' : 'bg-red-500'
                } transition-all duration-700`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="text-lg text-gray-700 font-medium">{score}% Match</p>
          </div>
        )}

        {improvementPoints.length > 0 && (
          <div className="mt-4 bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Suggestions to Improve:</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              {improvementPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {(score !== null || improvementPoints.length > 0 || errorMessage) && (
          <div className="text-center mt-6">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                setFile(null);
                setScore(null);
                setImprovementPoints([]);
                setErrorMessage(null);
              }}
            >
              Upload Another Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeATSChecker;
