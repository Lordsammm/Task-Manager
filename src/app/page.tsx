'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { CheckSquare, ArrowRight, CheckCircle2, Clock, Shield, Loader2 } from 'lucide-react';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckSquare className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">EIU Student Task Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Track Your Coursework,{' '}
            <span className="text-blue-600">Ace Your Semester</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Built for EIU students. Organize your assignments, projects, and coursework 
            in one place. Stay on top of deadlines and boost your academic success.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Start Free <ArrowRight size={20} />
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Track Assignments</h3>
            <p className="mt-3 text-gray-600">
              Manage homework, essays, and projects. Set priorities and due dates to never miss a deadline.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Monitor Progress</h3>
            <p className="mt-3 text-gray-600">
              See your coursework status at a glance. Track what&apos;s pending, in progress, and completed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Secure & Private</h3>
            <p className="mt-3 text-gray-600">
              Your academic data is protected. Only you can access your tasks and assignments.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-600">
          <p>&copy; 2026 EIU Student Task Manager. A personal project for EIU students.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm font-bold hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-bold hover:text-blue-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
