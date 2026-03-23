import { Fingerprint, Sliders, Wallet, Headphones } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SampleStudies() {
  const { ref, isVisible } = useScrollAnimation();

  const studies = [
    {
      icon: Fingerprint,
      title: 'Identity Verification Flow Review',
      description:
        'Assessment of how identification steps, document requirements, and timing expectations are communicated during account setup.',
    },
    {
      icon: Sliders,
      title: 'Control Visibility Evaluation',
      description:
        'Review of how limit-setting tools, account controls, and self-management features are presented and accessed.',
    },
    {
      icon: Wallet,
      title: 'Payment Pathway Clarity',
      description:
        'Evaluation of deposit and withdrawal instructions, payment method presentation, and timing disclosures.',
    },
    {
      icon: Headphones,
      title: 'Support Journey Analysis',
      description:
        'Review of user pathways to help, issue resolution, and account assistance resources.',
    },
  ];

  return (
    <section id="studies" className="py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Illustrative Study Areas
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              FieldTrace Research may conduct studies across a range of topics relevant to regulated
              digital workflows and user understanding.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {studies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-600 italic">
                Detailed study materials may be limited or invitation-based depending on scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
