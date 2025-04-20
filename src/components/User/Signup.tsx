// src/components/SignUp.tsx
import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";

const SignUp: React.FC = () => {
  const { signup } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, password, profession } = formData;

    if (!name || !email || !password || !profession) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await signup(name, email, password, profession);
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center bg-[#F8F8EC] min-h-screen md:min-h-full px-4 py-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Create Your Account</h2>
        <p className="text-center text-gray-600 text-lg mb-4">Join us today! It's quick and easy.</p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700 mb-1">Username</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6a11cb] text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6a11cb] text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Set your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6a11cb] text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="profession" className="block text-lg text-gray-700 mb-1">Profession</label>
            <select
              id="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6a11cb] text-base"
              required
            >
              <option value="">Select your profession</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-2 font-semibold rounded text-base transition-colors ${
              loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-[#6a11cb] hover:bg-[#4a0ea1] text-white'
            }`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-lg mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-[#6a11cb] hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
