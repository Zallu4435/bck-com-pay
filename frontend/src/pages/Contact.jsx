// pages/Contact.jsx
import React from 'react';

const contacts = [
  { name: "John Doe", phone: "+91 98765 43210" },
  { name: "Jane Smith", phone: "+91 87654 32109" },
  { name: "Mike Johnson", phone: "+91 76543 21098" }
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white bg-gray-900 py-6 rounded-lg text-center shadow-lg">
        Contact Us
      </h2>

      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 md:p-10 mt-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Our Team</h3>
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li 
              key={index} 
              className="flex justify-between p-4 md:p-6 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition"
            >
              <span className="text-lg md:text-2xl lg:text-3xl font-medium">{contact.name}</span>
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold text-emerald-400">{contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
