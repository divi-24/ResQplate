import React from 'react';
import {
  HelpCircle,
  Book,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  ExternalLink,
} from 'lucide-react';

const faqs = [
  {
    question: 'How do I accept a new task?',
    answer: 'To accept a new task, go to the Tasks page and click on the "Accept" button on any available task card. Make sure to review the task details before accepting.',
  },
  {
    question: 'What should I do if I cannot complete a task?',
    answer: 'If you cannot complete a task, please contact support immediately through the Messages section or call the emergency helpline. This allows us to reassign the task to another volunteer.',
  },
  {
    question: 'How do I report issues with the app?',
    answer: 'You can report technical issues through the Help & Support section or by sending an email to support@foodsaver.org. Please include as much detail as possible about the problem.',
  },
  {
    question: 'Can I change my availability after setting it?',
    answer: 'Yes, you can update your availability anytime through the Settings page. Changes will affect future task assignments but not your current accepted tasks.',
  },
];

export const Help = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Book className="text-green-600" size={24} />
            <h2 className="text-lg font-semibold">Quick Start Guide</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">1</span>
              <span>Review available tasks in the Tasks section</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">2</span>
              <span>Accept tasks that match your schedule</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">3</span>
              <span>Use the Map for navigation assistance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">4</span>
              <span>Mark tasks as complete after delivery</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="text-green-600" size={24} />
            <h2 className="text-lg font-semibold">Contact Support</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Emergency Helpline</p>
                <p className="text-sm text-gray-600">1-800-FOOD-HELP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-gray-600">support@foodsaver.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="text-green-600" size={24} />
            <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <h3 className="font-medium text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-green-600" size={24} />
            <h2 className="text-lg font-semibold">Resources</h2>
          </div>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Book size={20} className="text-green-600" />
                <span>Volunteer Handbook</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-green-600" />
                <span>Food Safety Guidelines</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-green-600" />
                <span>Vehicle Requirements</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};