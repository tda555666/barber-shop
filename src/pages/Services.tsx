// src/pages/Services.tsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    { title: 'Haircut', description: 'A fresh and stylish haircut.', price: '$25' },
    { title: 'Shave', description: 'A smooth and clean shave.', price: '$15' },
    { title: 'Haircut + Shave', description: 'Get both a haircut and a shave.', price: '$35' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          price={service.price}
        />
      ))}
    </div>
  );
};

export default Services;
