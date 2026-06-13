export default function Privacy() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20 space-y-8 text-left">
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
      <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Last updated: June 13, 2026</p>

      <div className="border-t border-white/5 pt-8 space-y-6 text-zinc-300 text-sm leading-relaxed">
        <p>
          At Navayuva Bharati Infotech (NYB Infotech), we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of information we collect, record, and how we use it.
        </p>

        <h3 className="text-xl font-bold text-white tracking-tight pt-4">1. Information We Collect</h3>
        <p>
          We collect personal identification details (such as Name, Email, Phone number, and Resume files) that you voluntarily submit through our careers portal, contact pages, or application forms. We also log diagnostic data such as IP address and browser headers to ensure network security.
        </p>

        <h3 className="text-xl font-bold text-white tracking-tight pt-4">2. How We Use Your Information</h3>
        <p>
          We use the collected datasets to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Evaluate qualifications and contact applicants for job openings.</li>
          <li>Analyze process logs and resolve system bugs.</li>
          <li>Communicate directly to address client consulting inquires.</li>
          <li>Ensure compliance with zero-trust security audits.</li>
        </ul>

        <h3 className="text-xl font-bold text-white tracking-tight pt-4">3. Data Security</h3>
        <p>
          We implement end-to-end cryptographic enveloping and microsegmentation. Your personal details are stored inside our secure database files, shielded behind access controls.
        </p>

        <h3 className="text-xl font-bold text-white tracking-tight pt-4">4. Third-Party Sharing</h3>
        <p>
          We do not sell, trade, or distribute your private information to third-party brokers. Data is shared only when required by legal compliance frameworks or during authorized SOC2 auditing audits.
        </p>

        <h3 className="text-xl font-bold text-white tracking-tight pt-4">5. Contact Us</h3>
        <p>
          If you have questions regarding our privacy rules, reach out to us at <a href="mailto:info@nybinfotech.com" className="text-indigo-400 hover:underline">info@nybinfotech.com</a>.
        </p>
      </div>
    </div>
  );
}
