import Link from 'next/link';
import { CheckSquare, ArrowLeft } from 'lucide-react';

export default function TermsOfUsePage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-gray-500 mb-8">Last updated: January 20, 2026</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using EIU Student Task Manager, you accept and agree to be bound by these 
                Terms of Use. If you do not agree to these terms, please do not use this application. 
                This is a personal project built for European International University students and anyone 
                interested in managing their academic tasks effectively.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                EIU Student Task Manager is a web-based task management application designed to help 
                EIU students organize their coursework, assignments, and projects. The service allows 
                users to create, manage, and track tasks with features including priority levels, 
                due dates, and status tracking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When creating an account, you agree to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use a strong password meeting our security requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree NOT to use the service to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Upload malicious content or attempt to compromise the system</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to access other users&apos; data or accounts</li>
                <li>Use the service for any commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of the content you create (tasks, descriptions, etc.). By using 
                the service, you grant us the right to store and display your content solely for the 
                purpose of providing the task management service. You are responsible for ensuring 
                your content does not violate any laws or third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                As an educational project, we strive to maintain service availability but cannot 
                guarantee uninterrupted access. The service may be temporarily unavailable for 
                maintenance, updates, or unforeseen technical issues. We are not liable for any 
                loss of data or inconvenience caused by service interruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The EIU Student Task Manager application, including its design, code, and branding, 
                is a personal project developed by Samuel Afolabi for European International University 
                students. All rights to the application design and functionality are reserved.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                This application is provided &quot;as is&quot; for educational purposes. We make no warranties, 
                expressed or implied, regarding the reliability, accuracy, or availability of the 
                service. In no event shall the developer be liable for any damages arising from 
                the use of this application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violation 
                of these terms or for any other reason at our discretion. Upon termination, your 
                right to use the service will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may modify these Terms of Use at any time. Continued use of the service after 
                changes constitutes acceptance of the new terms. We encourage you to review these 
                terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Use, please contact me at{' '}
                <a href="mailto:samuelafolabi48@gmail.com" className="text-blue-600 hover:underline">
                  samuelafolabi48@gmail.com
                </a>
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
            <Link href="/privacy" className="text-sm font-bold hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-bold text-blue-600">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
