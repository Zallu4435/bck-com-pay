// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10">
      © {new Date().getFullYear()} ViolationPay. All rights reserved.
    </footer>
  );
};

export default Footer;
