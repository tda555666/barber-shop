// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to The Barber Shop!</h1>
      <p className="mt-4">Get the best haircut in town.</p>
      <Link to="/services" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg">Explore Our Services</Link>
    </div>
  );
};

export default Home;
