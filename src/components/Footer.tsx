export default function Footer() {
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

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">FT</span>
            </div>
            <span className="font-semibold text-white text-lg">FieldTrace Research</span>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto mb-2 leading-relaxed">
            FieldTrace Research is an independent market research and user-experience research
            organization.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-2 leading-relaxed">
            All research outputs are informational and do not constitute endorsements,
            recommendations, or guarantees.
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <button
              onClick={() => scrollToSection('#overview')}
              className="hover:text-blue-400 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('#research-focus')}
              className="hover:text-blue-400 transition-colors"
            >
              Research Focus
            </button>
            <button
              onClick={() => scrollToSection('#methodology')}
              className="hover:text-blue-400 transition-colors"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection('#participation')}
              className="hover:text-blue-400 transition-colors"
            >
              Participation
            </button>
            <button
              onClick={() => scrollToSection('#faq')}
              className="hover:text-blue-400 transition-colors"
            >
              FAQ
            </button>
            <a
              href="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 FieldTrace Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
