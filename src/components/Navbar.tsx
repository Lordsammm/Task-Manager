'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { LogOut, CheckSquare, User } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center gap-2">
              <CheckSquare className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">EIU Student Task Manager</span>
            </Link>
          </div>

          {user && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <User size={20} />
                <span className="hidden sm:inline font-medium">{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
                aria-label="Logout"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
