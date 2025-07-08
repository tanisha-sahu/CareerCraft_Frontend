import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditPortfolioForm from '../components/form/EditPortfolioForm';
import { PortfolioFormData } from '../types';


const EditPortfolio: React.FC = () => {
  const { id } = useParams(); // from /portfolio/edit/:id
  const [portfolioData, setPortfolioData] = useState<PortfolioFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(`https://carreercraft-backend.onrender.com/api/portfolio/view/${id}`);
        if (!res.ok) throw new Error('Failed to fetch portfolio');
        const data = await res.json();
        setPortfolioData(data.portfolio);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPortfolio();
  }, [id]);

  if (loading) return <p className="text-center py-8">Loading portfolio...</p>;
  if (error) return <p className="text-center text-red-500 py-8">{error}</p>;
  if (!portfolioData) return <p className="text-center py-8">Portfolio not found</p>;
  return <EditPortfolioForm portfolioData={portfolioData} />;
};

export default EditPortfolio;
