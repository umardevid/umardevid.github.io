import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import PortfolioSubPage from '../../pages/portfolio/PortfolioSubPage';

console.log(PortfolioSubPage);

const PortfolioContainer: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <PortfolioSubPage />
      </Route>
    </Switch>
  );
};

export default PortfolioContainer;
