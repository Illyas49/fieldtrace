import { FileText, Users, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Overview() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: FileText,
      title: 'Structured Research Design',
      description:
        'Each study is built around defined scopes, participant criteria, and repeatable observation points.',
    },
    {
      icon: Users,
      title: 'User-Facing Workflows',
      description:
        'We examine how users move through registration, settings, controls, payments, and support interactions.',
    },
    {
      icon: BarChart3,
      title: 'Aggregated Findings',
      description:
        'Outputs are synthesized at a research level and do not identify individual participants in public-facing materials.',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What FieldTrace Research Does
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              FieldTrace Research is an independent research organization focused on market
              research, usability analysis, and structured participant feedback in regulated digital
              environments.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our work examines how users encounter onboarding flows, account controls, payment
              pathways, support tools, and other critical product elements. We evaluate how clearly
              these systems are presented and how understandable they feel in practice.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed font-medium">
                FieldTrace Research does not promote, rank, endorse, or market third-party platforms.
                Research is conducted for analytical purposes only and findings are reported in
                structured, aggregated form.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
