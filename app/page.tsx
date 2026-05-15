export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my AWS account?',
      a: 'You create a read-only IAM role in your AWS account and share the ARN. We use it to pull CloudWatch metrics and billing data — no write access, ever.'
    },
    {
      q: 'How accurate are the cost predictions?',
      a: 'We use linear regression on your last 30 days of usage data. Predictions are typically within 10–15% of actual costs, giving you enough lead time to act.'
    },
    {
      q: 'What happens when a spike is detected?',
      a: 'You get an email alert via Resend the moment projected costs exceed your threshold, along with specific optimization recommendations to reduce spend.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Developers & Startup CTOs
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Predict AWS cost spikes<br />before they happen
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your AWS account, get ML-powered cost forecasts, and receive email alerts before you blow past your budget. Stop being surprised by your AWS bill.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Predicting — $15/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Read-only IAM access</span>
          <span>✓ Email alerts via Resend</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Connect unlimited AWS accounts',
              'Daily cost forecasts via linear regression',
              'Email alerts when budget threshold exceeded',
              'Optimization recommendations per service',
              'CloudWatch metrics & billing data analysis',
              '30-day usage history'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
