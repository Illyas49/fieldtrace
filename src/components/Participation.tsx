import { CheckCircle2, DollarSign, UserCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Participation() {
  const { ref, isVisible } = useScrollAnimation();

  const blocks = [
    {
      icon: UserCheck,
      title: 'Eligibility',
      description: 'Participants must meet study-specific requirements and legal age thresholds.',
    },
    {
      icon: DollarSign,
      title: 'Compensation',
      description: 'Where applicable, compensation is provided for time and feedback only.',
    },
    {
      icon: CheckCircle2,
      title: 'Voluntary Basis',
      description: 'Participation is optional and may be discontinued at any time.',
    },
  ];

  return (
    <section id="participation" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-mustard-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Participation & Access
            </h2>
            <div className="w-20 h-1 bg-mustard-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto mb-12 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Participation in FieldTrace Research studies is voluntary and may be limited by
              geography, study design, participant criteria, or device requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Participants may be invited to complete surveys, workflow evaluations, or structured
              research activities. Availability is not guaranteed, and some studies may be
              restricted based on scope.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-mustard-400 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mustard-500 to-mustard-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{block.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{block.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
