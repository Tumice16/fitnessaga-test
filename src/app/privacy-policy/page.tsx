import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Fitness Saga</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Fitness Saga. Learn how we protect and use your data."
        />
      </Head>

      <Header />

      <section
        className="py-16 bg-[#f8f9fa] text-[#1d1d1f]"
        id="privacy-policy"
      >
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Privacy Policy for Fitness Saga
          </h2>
          <p className="mb-4">
            <strong>Effective Date:</strong> June 23, 2025
            <br />
            <strong>Last Updated:</strong> June 23, 2025
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Introduction</h3>

          <p className="mb-4">
            Welcome to Fitness Saga! Fitness Saga is a product owned and
            operated by{" "}
            <a
              href="https://theslimprep.com"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
            >
              TheSlimPrep
            </a>
            , a company based in Canada. We are committed to protecting your
            privacy and being transparent about how we collect, use, and protect
            your personal information. This Privacy Policy explains how Fitness
            Saga ("we," "our," or "us") handles your data when you use our
            mobile application (the "App").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Information We Collect
          </h3>

          <h4 className="font-semibold mt-4 mb-2">Health and Fitness Data</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Step counts</li>
            <li>Distance traveled</li>
            <li>Activity sessions</li>
            <li>Heart rate data</li>
            <li>Calories burned</li>
            <li>Sleep data</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Account Information</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Name and email address</li>
            <li>Profile and fitness preferences</li>
            <li>App preferences</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Usage Data</h4>
          <ul className="list-disc list-inside mb-4">
            <li>App interactions</li>
            <li>Achievement progress</li>
            <li>Group participation</li>
            <li>Device information</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Location Data (Optional)</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Approximate location</li>
            <li>Workout routes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            How We Use Your Information
          </h3>

          <h4 className="font-semibold mt-4 mb-2">Core App Functionality</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Track and calculate fitness data</li>
            <li>Enable gamification and challenges</li>
            <li>Send smart notifications</li>
            <li>Sync data across devices</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">App Improvement</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Analyze usage patterns</li>
            <li>Improve technical performance</li>
            <li>Develop new features</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Communication</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Notifications and tips</li>
            <li>Updates and announcements</li>
            <li>Support responses</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Data Sharing and Disclosure
          </h3>
          <p className="mb-2 font-semibold">What We Share</p>
          <ul className="list-disc list-inside mb-4">
            <li>Group leaderboards</li>
            <li>Achievement celebrations</li>
            <li>Aggregated statistics</li>
          </ul>

          <p className="mb-2 font-semibold">What We Don't Share</p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal health data for marketing</li>
            <li>Individual records with employers</li>
            <li>Location data with advertisers</li>
            <li>Data for commercial gain</li>
          </ul>

          <p className="mb-4">
            We may share data when legally required to protect rights or comply
            with law.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Data Security</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Encryption in transit and at rest</li>
            <li>Access control policies</li>
            <li>Regular security audits</li>
            <li>Local device data storage</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Your Role</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Secure credentials</li>
            <li>Use device security features</li>
            <li>Update the app regularly</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Your Privacy Rights
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>View, update, delete, or export data</li>
            <li>Manage notification and sharing settings</li>
            <li>Control location and group participation</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Children’s Privacy
          </h3>
          <p className="mb-4">
            We do not knowingly collect data from children under 13. If
            discovered, such data will be deleted immediately.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Health Data Specific Protections
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Only accessed with consent</li>
            <li>Revocable at any time</li>
            <li>Not sold</li>
            <li>Exportable in standard formats</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Changes to This Privacy Policy
          </h3>
          <p className="mb-4">
            We may update this policy and notify you via app or email. Continued
            use implies acceptance.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p className="mb-4">
            Email:{" "}
            <a
              href="mailto:support@fitnessaga.com"
              className="text-blue-600 hover:underline"
            >
              support@fitnessaga.com
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Regional Compliance
          </h3>

          <h4 className="font-semibold mt-4 mb-2">GDPR (European Users)</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Consent and legitimate interest processing</li>
            <li>Data portability and right to object</li>
            <li>Right to file complaints with DPA</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">CCPA (California Users)</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Right to know, delete, and opt out (we don’t sell data)</li>
            <li>Right to non-discrimination</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
