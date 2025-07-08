import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUserPortfolio } from '../types';
import Portfolio1 from './Portfolio1';
import Portfolio2 from './Portfolio2';
import Portfolio3 from './Portfolio3';

const Portfolio: React.FC = () => {
  let { portfolioId } = useParams<{ portfolioId: string }>();
  const [portfolioData, setPortfolioData] = useState<IUserPortfolio | null>(null);
  const [template, setTemplate] = useState<'dark' | 'light' | 'modern' | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(`https://carreercraft-backend.onrender.com/api/portfolio/view/${portfolioId}`);
        const json = await res.json();
        setPortfolioData(json.portfolio);
        setTemplate(json.portfolio.template);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    if (portfolioId) {
      fetchPortfolio();
    }
  }, [portfolioId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!portfolioData) return <div className="text-center mt-10">No portfolio data found.</div>;

  const renderTheme = () => {
    switch (template) {
      case 'dark':
        return <Portfolio1 data={portfolioData} />;
      case 'light':
        return <Portfolio2 data={portfolioData} />;
      case 'modern':
        return <Portfolio3 data={portfolioData} />;
      default:
        return <div className="text-center mt-10">Invalid template selected.</div>;
    }
  };

  return <div>{renderTheme()}</div>;
};

export default Portfolio;
