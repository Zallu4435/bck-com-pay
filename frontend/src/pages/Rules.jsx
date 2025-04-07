// components/Rules.jsx
import React from 'react';

const rules = [
  {
    id: 1,
    rule: 'English Communication Only',
    description: 'Please use only English during regular sessions. Speaking Malayalam may lead to a minor penalty.',
    fine: '₹5',
    context: 'General Violation',
  },
  {
    id: 2,
    rule: 'English During Communication Sessions',
    description: 'Strict English-only policy applies during communication sessions. Malayalam or other languages will incur a higher penalty.',
    fine: '₹10',
    context: 'Communication Session',
  },
];

const Rules = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-gray-900 py-6 rounded-lg text-center shadow-lg">
        Language Rules & Penalties
      </h2>

      <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden mt-8 border border-gray-700">
        {rules.map((item) => (
          <div 
            key={item.id} 
            className="p-8 transition-all duration-300 hover:bg-gray-700 border-b border-gray-600"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{item.rule}</h3>
                <p className="text-lg text-gray-400">{item.context}</p>
              </div>
              <span className="text-fuchsia-400 font-bold text-2xl bg-gray-900 px-4 py-2 rounded-lg shadow-md">
                {item.fine}
              </span>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
