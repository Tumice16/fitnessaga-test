import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service – Fitness Saga</title>
        <meta
          name="description"
          content="Read the Terms of Service for Fitness Saga. Learn about user rights, responsibilities, and data practices."
        />
      </Head>

      <Header />

      <section
        className="py-16 bg-[#f8f9fa] text-[#1d1d1f]"
        id="terms-of-service"
      >
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
          <p className="mb-4">
            <strong>Effective Date:</strong> June 23, 2025
            <br />
            <strong>Last Updated:</strong> June 23, 2025
          </p>

          <p className="mb-4">
            By downloading, installing, or using the Fitness Saga mobile
            application, you agree to be bound by these Terms of Service
            ("Terms"). Please read them carefully before using our app.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Acceptance of Terms
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              By accessing or using Fitness Saga, you agree to these Terms and
              our Privacy Policy.
            </li>
            <li>
              You must be at least 13 years old to use the app. Users under 18
              require parental consent.
            </li>
            <li>
              You confirm that you have the legal capacity to enter into this
              agreement.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Description of Service
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Step tracking, gamification, and social features.</li>
            <li>Free service with ad support and potential beta features.</li>
            <li>
              Available on iOS and Android with health platform integration.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            User Accounts and Registration
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Guest, full, and group accounts available.</li>
            <li>Accurate information and secure credentials are required.</li>
            <li>Unauthorized access must be reported immediately.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Acceptable Use Policy
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>No cheating, harassment, hacking, or spamming.</li>
            <li>Follow group and challenge conduct rules.</li>
            <li>Respect other users and the spirit of fair competition.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Intellectual Property Rights
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              We retain all rights to the app’s design, features, and branding.
            </li>
            <li>You retain rights to your own data and content shared.</li>
            <li>Third-party content is governed by their respective terms.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Health and Safety Disclaimers
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              This app is not a medical device or substitute for professional
              advice.
            </li>
            <li>Use fitness data as guidance, not diagnosis.</li>
            <li>We are not responsible for emergency or health issues.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Privacy and Data Protection
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>We collect only necessary data with user consent.</li>
            <li>Refer to our Privacy Policy for details.</li>
            <li>Users have control over data sharing and deletion.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Advertising and Monetization
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Fitness Saga is free and supported by non-intrusive ads.</li>
            <li>Ads are contextual and appropriate for all users.</li>
            <li>Sponsorships and partnerships are clearly labeled.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Social Features and Community Guidelines
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              Be respectful, fair, and encouraging in groups and challenges.
            </li>
            <li>Inappropriate content or behavior will be moderated.</li>
            <li>Users can report issues and appeal moderation actions.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Service Modifications and Availability
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Features may change or be discontinued with notice.</li>
            <li>
              Service may be interrupted for maintenance or technical issues.
            </li>
            <li>
              Platform and integration changes may affect app performance.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Limitation of Liability
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>We provide the app "as is" with no warranties.</li>
            <li>
              We are not liable for any indirect or consequential damages.
            </li>
            <li>
              Total liability is limited to the amount you paid (which is $0).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Indemnification</h3>
          <p className="mb-4">
            You agree to indemnify Fitness Saga from claims related to your use
            of the app, your content, or your legal violations.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Termination</h3>
          <ul className="list-disc list-inside mb-4">
            <li>You may delete your account at any time.</li>
            <li>
              We may suspend or terminate accounts for violations or inactivity.
            </li>
            <li>
              Terminated accounts lose access to features; no refunds
              applicable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Dispute Resolution
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Disputes should first be resolved informally via support.</li>
            <li>These terms are governed by the laws of Canada.</li>
            <li>Binding arbitration may apply where legally allowed.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              We will notify users of material changes via email or in-app
              notices.
            </li>
            <li>Updated terms take effect 30 days after notice.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
