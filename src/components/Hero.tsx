import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, Database } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const stats = [
    { icon: Shield, label: 'Independent', value: '100%' },
    { icon: Database, label: 'Research Focus', value: 'Data-Driven' },
    { icon: Users, label: 'User-Centric', value: 'Analysis' },
    { icon: TrendingUp, label: 'Methodology', value: 'Structured' },
  ];

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-mustard-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-mustard-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mustard-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Independent research on regulated digital experiences
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              FieldTrace Research conducts structured market research and workflow analysis to
              understand how users interact with regulated and age-restricted digital products
              across the United States.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#research-focus')}
                className="bg-mustard-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-mustard-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                View Research Focus
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#methodology')}
                className="bg-white text-mustard-600 px-8 py-4 rounded-lg font-semibold border-2 border-mustard-600 hover:bg-mustard-50 transition-all hover:scale-105 transform"
              >
                Review Methodology
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                    <Icon size={20} className="text-mustard-600 mb-2" />
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-mustard-600 to-mustard-400 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional research environment with data and compliance focus"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mustard-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
