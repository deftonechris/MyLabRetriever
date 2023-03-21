import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-12 mb-6">Understand Your Lab Results with Ease</h1>

      {/* App Description */}
      <p className="text-lg text-center mb-12 px-4 sm:px-0 max-w-3xl">
        MyLabRetriever is a user-friendly app designed to help patients easily understand their lab results.
        Our platform offers simplified explanations, visualizations, and personalized insights to empower you to take control of your health.
      </p>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
       
      </div>

      {/* Register, Demo buttons */}
      <div className="mb-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Get Started
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Try Demo
        </button>
      </div>

      {/* FAQs */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        
      </div>
    </div>
  );
};

export default LandingPage;
