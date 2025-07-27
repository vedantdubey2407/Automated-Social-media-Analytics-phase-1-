import React from 'react';
import { BarChart2, LogIn } from 'lucide-react';

const LoginPage = ({ onLogin }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
    <div className="w-full max-w-md p-10 space-y-8 bg-white/90 rounded-3xl shadow-2xl border border-blue-100 backdrop-blur-md">
      <div className="flex justify-center">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 shadow-lg mb-4">
          <BarChart2 className="w-10 h-10 text-white" />
        </span>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Socialytics</h1>
      <p className="text-gray-500 text-lg">Sign in to access your dashboard and analytics.</p>
      <button
        onClick={onLogin}
        className="w-full flex items-center justify-center px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        <LogIn className="w-5 h-5 mr-2" />
        Sign In (Demo)
      </button>
      <div className="flex items-center justify-center pt-4">
        <span className="h-px w-16 bg-gray-200"></span>
        <span className="mx-2 text-xs text-gray-400">or</span>
        <span className="h-px w-16 bg-gray-200"></span>
      </div>
      <p className="text-xs text-gray-400">
        This is a <span className="font-semibold text-blue-500">demo application</span>. Clicking the button will log you in with mock data.
      </p>
    </div>
  </div>
);

export default LoginPage;