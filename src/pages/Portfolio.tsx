import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/portfolio/Menu';
import PortfolioContainer from '../container/portfolio/PortfolioContainer';

const Portfolio: React.FC = () => {
  return (
    <Router>
      <div className="w-full">
        <Menu />
        <PortfolioContainer />
      </div>
    </Router>
  );
};

export default Portfolio;
