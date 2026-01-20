import Link from 'next/link';
import { CheckSquare, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <CheckSquare className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">EIU Student Task Manager</span>
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 20, 2026</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to EIU Student Task Manager. We respect your privacy and are committed to protecting 
                your personal data. This privacy policy explains how we collect, use, and safeguard your 
                information when you use our task management application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We collect the following types of information:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and encrypted password when you register.</li>
                <li><strong>Task Data:</strong> Task titles, descriptions, due dates, priorities, and status that you create.</li>
                <li><strong>Usage Data:</strong> How you interact with the application, including login times and feature usage.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your information is used to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and maintain the task management service</li>
                <li>Authenticate your identity and secure your account</li>
                <li>Store and display your tasks across sessions</li>
                <li>Improve our application based on usage patterns</li>
                <li>Send important notifications about your account (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Passwords are hashed using bcrypt with strong salt rounds</li>
                <li>Authentication tokens are encrypted and stored in HTTP-only cookies</li>
                <li>All data transmission uses secure connections</li>
                <li>Access to your tasks is restricted to your authenticated account only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                Your account data and tasks are retained as long as your account is active. You may delete 
                individual tasks at any time. If you wish to delete your account entirely, please contact 
                the administrator.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Third-Party Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or share your personal information with third parties. Your task 
                data is private and only accessible by you through your authenticated account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal data stored in our system</li>
                <li>Correct inaccurate information in your profile</li>
                <li>Delete your tasks and request account deletion</li>
                <li>Export your task data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact me at{' '}
                <a href="mailto:samuelafolabi48@gmail.com" className="text-blue-600 hover:underline">
                  samuelafolabi48@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of any 
                significant changes by updating the &quot;Last updated&quot; date at the top of this policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-gray-600">
          <p>&copy; 2026 EIU Student Task Manager. A personal project for EIU students.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm font-bold text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-bold hover:text-blue-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
