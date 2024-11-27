// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <p className="mt-2 font-bold">{price}</p>
    </div>
  );
};

export default ServiceCard;
