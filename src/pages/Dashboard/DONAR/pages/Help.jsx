import React from 'react';
import { HelpCircle, MessageCircle, Book, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

function Help() {
  const faqs = [
    {
      question: 'How do I make a donation?',
      answer: 'Click on the "Make a Donation" button in the sidebar, fill out the required information about your food donation, and submit the form. A volunteer will be assigned to pick up your donation.'
    },
    {
      question: 'What types of food can I donate?',
      answer: 'You can donate non-perishable foods, fresh produce, baked goods, and prepared meals that are still safe for consumption. All food must be within its expiration date and properly stored.'
    },
    {
      question: 'How is my donation delivered?',
      answer: 'Once you submit a donation, our verified volunteers will pick up the food from your specified location and deliver it to the nearest participating food bank or charitable organization.'
    }
  ];

  return (
   <>
   <Navigation />
    <div className="max-w-4xl mx-auto pt-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">Help Center</h1>
        <p className="text-gray-600 mt-2">Find answers to common questions and get support.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-green-800">Contact Support</h2>
          </div>
          <p className="text-gray-600 mb-4">Need help? Our support team is here for you 24/7.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Start Chat
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Book className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-green-800">Documentation</h2>
          </div>
          <p className="text-gray-600 mb-4">Browse our detailed documentation and guides.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            View Docs
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold text-green-800">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <h3 className="text-lg font-medium text-green-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Community Guidelines</h2>
        <div className="prose prose-green">
          <p className="text-gray-600">
            Learn about our community guidelines and best practices for food donation.
          </p>
          <a href="#" className="flex items-center gap-1 text-green-600 hover:text-green-800 mt-2">
            Read Guidelines
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
   </>
  );
}

export default Help;