import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useToast } from "../landing/ToastContext";

// Define the data type for a portfolio item
interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const { showToast } = useToast();
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const navigate = useNavigate();

  const fetchPortfolios = async () => {
    try {
      if (!user?.id) return;
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/portfolio/list/${user.id}`);
      setPortfolios(response.data);
    } catch (err) {
      setError('Failed to load portfolio data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, [user]);

  const handleView = (id: string) => navigate(`/portfolio/view/${id}`);
  const handleEdit = (id: string) => navigate(`/portfolio/edit/${id}`);
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this portfolio?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`http://localhost:3000/api/portfolio/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        showToast('danger', 'Failed to delete portfolio.');
        return;
      }
  
      navigate('/profile');
      showToast('success', 'Portfolio deleted successfully!');
    } catch (err) {
      showToast('danger', 'Failed to delete portfolio.');
    }
  };
  const handleShare = (id: string) => {
    const shareUrl = `${window.location.origin}/portfolio/view/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Portfolio link copied to clipboard!");
  };

  return (
    <div className="md:mt-0 mt-12 p-6 bg-[#F8F8EC]">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Portfolio</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : portfolios.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <div
              key={item._id}
              className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold text-gray-800">Portfolio {index + 1}</h2>
              <p className="text-gray-600 mt-2 py-4">Click below to manage or view the details of this creation.</p>
              <div className="mt-4 font-bold flex justify-between text-sm">
                <button onClick={() => handleView(item._id)} className="text-blue-600 hover:underline">
                  View
                </button>
                <button onClick={() => handleEdit(item._id)} className="text-green-600 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleShare(item._id)} className="text-yellow-600 hover:underline">
                  Share
                </button>
                <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No portfolio items found. Please add one!</p>
      )}
    </div>
  );
};

export default Portfolio;
