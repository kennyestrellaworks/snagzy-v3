import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function Accordions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [multiOpen, setMultiOpen] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'What is a design system?',
      answer:
        'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It helps maintain consistency across products and speeds up development.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Browse through the sidebar to explore all available components. Each component page includes live examples and different variants you can use in your projects.',
    },
    {
      question: 'Can I customize the components?',
      answer:
        'Absolutely! All components are built with customization in mind. You can easily modify colors, sizes, and behaviors to match your specific needs.',
    },
    {
      question: 'Is this production ready?',
      answer:
        'Yes! All components follow best practices for accessibility, performance, and maintainability. They are thoroughly tested and ready for production use.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMultiAccordion = (index: number) => {
    setMultiOpen((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Accordions</h1>
        <p className="text-slate-600 mb-8">
          Expandable content sections for organizing information
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Single Selection
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-slate-600 text-sm border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Multiple Selection
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleMultiAccordion(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform ${
                        multiOpen.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {multiOpen.includes(index) && (
                    <div className="px-4 pb-4 text-slate-600 text-sm border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Styled Variant
            </h2>
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200'
                      : 'bg-white border-2 border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center gap-3 p-5 text-left"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        openIndex === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-900 flex-1">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
