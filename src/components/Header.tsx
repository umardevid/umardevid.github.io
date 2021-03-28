import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex lg-max:flex-wrap items-center justify-between px-4 lg:px-75px h-24 relative">
      <a
        href="index.html"
        className="flex items-center font-bold poppins text-lg text-black text-opacity-80">
        <img
          src="assets/avatars/avatar.png"
          alt="avatar"
          width="50"
          height="50"
          className="mr-4"
        />
        Umar Dev
      </a>

      <button
        type="button"
        className="text-black text-opacity-70 focus:outline-none outline-none hidden lg-max:inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="20"
          viewBox="0 0 448 512">
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </button>

      <nav className="flex lg-max:w-full lg-max:absolute lg-max:top-full -mx-4 lg-max:shadow-md">
        <ul className="w-full flex lg-max:flex-col">
          <li>
            <a
              href="link.html"
              className="flex w-full lg-max:border lg-max:border-b-0 poppins font-semibold text-black text-opacity-60 hover:text-opacity-70 px-15px py-2 hover:bg-gray-50">
              Portfolios
            </a>
          </li>
          <li>
            <a
              href="link.html"
              className="flex w-full lg-max:border lg-max:border-b-0 poppins font-semibold text-black text-opacity-60 hover:text-opacity-70 px-15px py-2 hover:bg-gray-50">
              Contact
            </a>
          </li>
          <li>
            <a
              href="link.html"
              className="flex w-full lg-max:border poppins font-semibold text-black text-opacity-60 hover:text-opacity-70 px-15px py-2 hover:bg-gray-50">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
