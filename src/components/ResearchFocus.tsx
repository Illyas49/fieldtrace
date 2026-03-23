import { LogIn, FileCheck, Shield, CreditCard, MessageCircle, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ResearchFocus() {
  const { ref, isVisible } = useScrollAnimation();

  const focuses = [
    {
      icon: LogIn,
      title: 'Onboarding & Entry Flows',
      description: 'Study of registration sequencing, initial disclosures, and early-user confidence.',
    },
    {
      icon: FileCheck,
      title: 'Information Clarity',
      description: 'Evaluation of labels, instructions, notices, and explanations shown to users.',
    },
    {
      icon: Shield,
      title: 'Controls & Safeguards',
      description:
        'Review of how account controls, limits, and self-management tools are surfaced and explained.',
    },
    {
      icon: CreditCard,
      title: 'Payments & Withdrawals',
      description:
        'Analysis of deposit paths, withdrawal workflows, and communication of timing or requirements.',
    },
    {
      icon: MessageCircle,
      title: 'Support & Resolution Paths',
      description:
        'Review of how users locate help resources, escalation options, and account assistance.',
    },
    {
      icon: Smartphone,
      title: 'Device & Environment Variance',
      description: 'Assessment of consistency across mobile, desktop, and varying user environments.',
    },
  ];

  return (
    <section id="research-focus" className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-blue-100/50 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Research Focus
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              FieldTrace organizes its research around recurring user-experience dimensions that
              commonly affect trust, usability, and clarity in regulated digital systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focuses.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-7 rounded-xl border-2 border-gray-200 hover:border-blue-500 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{focus.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{focus.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
