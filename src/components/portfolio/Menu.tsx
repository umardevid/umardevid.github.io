import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col mt-12 justify-center container">
      <h1 className="text-3xl font-medium text-center">Portfolios</h1>
      <ul className="flex justify-center mt-8 px-4">
        <li>
          <Link to="/all" className="flex px-8 py-2">
            All
          </Link>
        </li>
        <li>
          <a href="link.html" className="flex px-8 py-2">
            Web
          </a>
        </li>
        <li>
          <a href="link.html" className="flex px-8 py-2">
            Mobile
          </a>
        </li>
        <li>
          <a href="link.html" className="flex px-8 bg-gray-200 rounded py-2">
            Design
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
