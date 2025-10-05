const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-5xl  mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-xl mb-6">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-cyan-50 text-sm md:text-base mb-4">
            Last Updated: 15 September, 2025
          </p>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Please read these Terms and Conditions ("Terms") carefully before
            using our platform. By accessing or using ChatBizz, you agree to be
            bound by these Terms. If you do not agree with any part of these
            Terms, please do not use the platform.
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-5 md:p-6 shadow-lg border border-slate-700/50">
          <div className="space-y-4 text-slate-300 text-sm md:text-base">
            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                1. Introduction
              </h2>
              <p>
                • "Welcome to ChatBizz! By creating an account or using our
                services, you agree to these Terms."
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                2. Eligibility
              </h2>
              <p>
                • Minimum age requirement (e.g., 13+ or 18+ depending on laws).
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                3. User Responsibilities
              </h2>
              <p>• Keep login details secure.</p>
              <p>• Don't post illegal or harmful content.</p>
              <p>• Don't impersonate others or mislead.</p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                4. Content Ownership
              </h2>
              <p>
                • You own your content, but grant ChatBizz a license to display
                and distribute it on the platform.
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                5. Marketplace Usage
              </h2>
              <p>
                • Transactions are outside the app. ChatBizz is not responsible
                for payments, refunds, or disputes.
              </p>
              <p>• ChatBizz must provide accurate product/service info.</p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                6. Verification & Ads
              </h2>
              <p>
                • Ads require verification badges or promotional tag
                subscriptions and may change in pricing.
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                7. Suspension & Termination
              </h2>
              <p>
                • ChatBizz can suspend or terminate accounts for ToS violations
                (spam, abuse, fraud).
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                8. Limitation of Liability
              </h2>
              <p>
                • ChatBizz is not liable for damages, lost profits, or issues
                arising from third-party use.
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">
                9. Changes to Terms
              </h2>
              <p>• Terms may be updated — continued use = acceptance.</p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-semibold mb-2">10. Contact</h2>
              <a
                href="mailto:email@chatbizz.xyz"
                className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
              >
                email@chatbizz.xyz
              </a>
            </div>
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default TermsConditions;
