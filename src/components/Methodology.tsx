import { Target, Users, Eye, FileBarChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Methodology() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: Target,
      title: 'Define Scope',
      description:
        'Each research initiative begins with a defined focus, participant criteria, and observation framework.',
    },
    {
      icon: Users,
      title: 'Structured Participation',
      description:
        'Participants complete guided research activities or surveys within a controlled and disclosed scope.',
    },
    {
      icon: Eye,
      title: 'Observation & Documentation',
      description:
        'User-facing workflows, messaging, and interface logic are documented using consistent criteria.',
    },
    {
      icon: FileBarChart,
      title: 'Aggregation & Reporting',
      description:
        'Findings are synthesized into aggregated insights intended for research and analytical purposes.',
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-white to-gray-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Methodology
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              FieldTrace Research uses structured, non-promotional research methods designed to
              document how users experience digital systems in practice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-white p-8 rounded-xl border-2 border-gray-200 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400">
                    <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 mt-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all">
                      <Icon size={26} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
