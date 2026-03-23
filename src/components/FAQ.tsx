import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is FieldTrace Research?',
      answer:
        'FieldTrace Research is an independent market research and user-experience research organization focused on regulated digital environments.',
    },
    {
      question: 'What do participants do?',
      answer:
        'Participants may complete surveys, workflow observations, or structured research activities designed to evaluate user-facing experiences.',
    },
    {
      question: 'Is participation voluntary?',
      answer: 'Yes. Participation is voluntary and may be discontinued at any time.',
    },
    {
      question: 'How is participant information handled?',
      answer:
        'Information is handled in accordance with applicable privacy laws and may be anonymized and aggregated for research purposes.',
    },
    {
      question: 'Does FieldTrace provide advice or recommendations?',
      answer:
        'No. FieldTrace does not provide financial, legal, investment, or gambling advice and does not endorse third-party services.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all hover:border-blue-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-7 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8 group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <ChevronDown
                      size={22}
                      className={`text-blue-600 group-hover:text-white transition-all ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-7 pb-6 text-gray-700 leading-relaxed bg-blue-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
