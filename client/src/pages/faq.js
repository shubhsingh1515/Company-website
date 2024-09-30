import React, { useState } from 'react';

const faqsData = [
  {
    question: 'What is VoIP and how does it work?',
    answer: 'VoIP stands for Voice over Internet Protocol. It allows users to make voice calls using a broadband internet connection instead of a regular phone line.',
  },
  {
    question: 'Why VoIP is good for businesses as compared to conventional landlines?',
    answer: 'VoIP is cost-effective, scalable, and provides advanced features like call forwarding, voicemail to email, and conferencing, which are beneficial for businesses.',
  },
  {
    question: 'What is a VoIP provider?',
    answer: 'A VoIP provider is a company that offers VoIP services, allowing users to make and receive phone calls over the internet.',
  },
  {
    question: 'Do I need a VoIP service provider?',
    answer: 'Yes, to use VoIP services, you need to subscribe to a VoIP service provider that facilitates internet-based calls.',
  },
  {
    question: 'What are the different types of VoIP service providers?',
    answer: 'There are several types of VoIP providers, including residential VoIP, business VoIP, and mobile VoIP providers.',
  },
  {
    question: "Can Ecosmob's VoIP service be customized to fit specific business needs?",
    answer: 'Yes, Ecosmob offers tailored VoIP solutions to match your specific business requirements.',
  },
  {
    question: 'How does Ecosmob ensure the security of its VoIP service?',
    answer: 'Ecosmob uses advanced encryption technologies and secure protocols to ensure the safety and security of your voice communications.',
  },
  {
    question: 'What are the benefits of using Ecosmob’s VoIP service for business communication?',
    answer: 'Ecosmob’s VoIP service is scalable, reliable, and packed with advanced features like call analytics, conferencing, and mobile integration.',
  },
  {
    question: 'What does a VoIP provider do?',
    answer: 'A VoIP provider offers services that allow voice communication over the internet, typically through a subscription or a service package.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      {faqsData.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg">{faq.question}</span>
            <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
