import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">FT</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">FieldTrace Research</span>
            </div>
            <a
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Terms of Service & Participant Acknowledgement
          </h1>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                FieldTrace Research Inc. ("FieldTrace") is an independent market research and
                user-experience research organization. These Terms of Service & Participant
                Acknowledgement (the "Agreement") govern participation in any FieldTrace study,
                survey, panel, review, or research program (collectively, the "Research Services").
                By accessing or participating in any Research Services, the participant confirms
                that they have read, understood, and agreed to this Agreement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Nature and Scope of Services
              </h3>
              <p className="mb-4">
                <strong>1.1</strong> FieldTrace conducts independent market research focused on user
                experience, workflow clarity, controls, transparency, and system usability in
                regulated or age-restricted digital environments.
              </p>
              <p className="mb-4">
                <strong>1.2</strong> FieldTrace is not a gambling operator, sportsbook, casino,
                gaming platform, wagering service, payment processor, or financial institution.
                FieldTrace does not operate platforms, accept wagers, process deposits or
                withdrawals, or provide inducements.
              </p>
              <p className="mb-4">
                <strong>1.3</strong> Research Services may include structured surveys, workflow
                evaluations, usability analysis, comparative reviews, and panel-based studies.
                Findings may be aggregated, anonymized, and synthesized for analytical purposes.
              </p>
              <p className="mb-6">
                <strong>1.4</strong> FieldTrace does not evaluate or promote bonuses, inducements,
                promotions, or commercial offers tied to third-party operators.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Independence</h3>
              <p className="mb-4">
                <strong>2.1</strong> FieldTrace operates independently and is not owned by,
                controlled by, affiliated with, or engaged on behalf of any third-party platform
                studied in connection with the Research Services.
              </p>
              <p className="mb-6">
                <strong>2.2</strong> FieldTrace does not receive referral fees, commissions, revenue
                sharing, or performance-based compensation from any platform referenced in its
                research.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Compliance and Standards
              </h3>
              <p className="mb-6">
                FieldTrace maintains commercially reasonable policies and procedures supporting age
                eligibility, ethical research conduct, data integrity, and responsible research
                practices.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Compensation</h3>
              <p className="mb-6">
                Any compensation offered by FieldTrace is solely for participant time, effort, and
                feedback. Compensation is not contingent on registering with, depositing funds into,
                wagering on, or commercially engaging with any third-party platform. FieldTrace may
                withhold compensation for incomplete, misleading, inaccurate, or non-compliant
                submissions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Confidentiality</h3>
              <p className="mb-6">
                Participants may access non-public research materials, methodologies, and study
                content. Such materials are confidential and may not be disclosed, reproduced, or
                used outside participation in FieldTrace Research Services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Intellectual Property
              </h3>
              <p className="mb-6">
                All research materials, submissions, datasets, analyses, and outputs generated
                through participation are the exclusive property of FieldTrace. Participants assign
                all rights, title, and interest in such materials to FieldTrace and waive moral
                rights to the extent permitted by law.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Participant Acknowledgements
              </h3>
              <p className="mb-4">
                <strong>7.1</strong> Participants must be at least 21 years of age and legally
                capable of participating.
              </p>
              <p className="mb-4">
                <strong>7.2</strong> Participation is in a personal capacity only and does not
                create any employment, agency, partnership, fiduciary, or advisory relationship.
              </p>
              <p className="mb-4">
                <strong>7.3</strong> Participation is voluntary and may be discontinued at any time.
              </p>
              <p className="mb-6">
                <strong>7.4</strong> FieldTrace does not provide gambling, financial, legal, or
                investment advice and does not make recommendations regarding third-party services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Responsible Engagement
              </h3>
              <p className="mb-4">
                <strong>8.1</strong> FieldTrace Research Services are conducted strictly for
                analytical and research purposes and are not intended to promote or encourage
                gambling or regulated activity.
              </p>
              <p className="mb-4">
                <strong>8.2</strong> FieldTrace may provide general informational resources related
                to responsible engagement and consumer protection.
              </p>
              <p className="mb-6">
                <strong>8.3</strong> FieldTrace does not monitor participant behavior outside the
                scope of research participation and does not provide treatment, counseling, or
                intervention services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Limitation of Liability
              </h3>
              <p className="mb-6">
                To the fullest extent permitted by law, FieldTrace shall not be liable for indirect,
                incidental, consequential, special, exemplary, or punitive damages arising out of
                participation in the Research Services. FieldTrace's aggregate liability shall not
                exceed the total compensation paid to the participant, if any.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h3>
              <p className="mb-6">
                Participants agree to indemnify and hold harmless FieldTrace and its officers,
                directors, employees, contractors, agents, and affiliates from any claims arising
                out of participation in the Research Services, breach of this Agreement, or
                independent actions taken outside the scope of the Research Services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. Suspension and Termination
              </h3>
              <p className="mb-6">
                FieldTrace may suspend, terminate, or disqualify participation at its discretion,
                including for non-compliance, inaccurate submissions, or conduct compromising
                research integrity. Unpaid compensation may be forfeited.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                12. Privacy and Data Handling
              </h3>
              <p className="mb-6">
                FieldTrace collects and processes personal information in accordance with applicable
                privacy laws, including applicable United States privacy requirements. Information
                may be anonymized and aggregated for research purposes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Entire Agreement</h3>
              <p className="mb-6">
                This Agreement constitutes the entire agreement between the parties regarding
                participation in the Research Services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                14. Amendments and Assignment
              </h3>
              <p className="mb-6">
                FieldTrace may amend this Agreement by posting updated terms. Continued
                participation constitutes acceptance. FieldTrace may assign this Agreement without
                participant consent. Participants may not assign their rights under this Agreement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Force Majeure</h3>
              <p className="mb-6">
                FieldTrace shall not be liable for delays or failures caused by events beyond
                reasonable control, including system outages, governmental actions, cyber incidents,
                labor disputes, telecommunications failures, or natural disasters.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                16. Governing Law and Jurisdiction
              </h3>
              <p className="mb-6">
                This Agreement shall be governed by the laws of the State of Nevada, without regard
                to conflict of law principles. Any dispute arising out of or relating to this
                Agreement or participation in the Research Services shall be subject to the
                exclusive jurisdiction of the state and federal courts located in Clark County,
                Nevada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
