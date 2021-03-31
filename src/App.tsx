import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import PageContainer from './container/Page';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <PageContainer />
    </Router>
  );
};

export default App;
