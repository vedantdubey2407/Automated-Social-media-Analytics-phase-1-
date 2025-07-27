// src/App.js
import React, { useState } from 'react';
import { BarChart2, Share2, Settings, HelpCircle, LogOut } from 'lucide-react';
import './index.css';  


import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ConnectAccountsPage from './pages/ConnectAccountPage';

// --- Layout Components ---
// In a larger app, these would be in src/layouts/ and src/components/
const Sidebar = ({ activePage, setActivePage, onLogout }) => (
  <aside className="w-64 bg-white shadow-md flex-shrink-0 hidden lg:flex flex-col">
    <div className="h-20 flex items-center justify-center border-b">
      <BarChart2 className="w-8 h-8 text-blue-500" />
      <span className="ml-3 text-2xl font-bold text-gray-800">Socialytics</span>
    </div>
    <nav className="flex-1 px-4 py-6 space-y-2">
      <a href="#" onClick={() => setActivePage('Dashboard')} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activePage === 'Dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}>
        <BarChart2 className="w-6 h-6" />
        <span className="ml-4">Dashboard</span>
      </a>
      <a href="#" onClick={() => setActivePage('Connect')} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activePage === 'Connect' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}>
        <Share2 className="w-6 h-6" />
        <span className="ml-4">Connect Accounts</span>
      </a>
    </nav>
    <div className="px-4 py-6 border-t">
        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200">
            <Settings className="w-6 h-6" />
            <span className="ml-4">Settings</span>
        </a>
        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200">
            <HelpCircle className="w-6 h-6" />
            <span className="ml-4">Help</span>
        </a>
        <button onClick={onLogout} className="w-full flex items-center px-4 py-3 mt-2 rounded-lg text-red-500 hover:bg-red-50">
            <LogOut className="w-6 h-6" />
            <span className="ml-4">Logout</span>
        </button>
    </div>
  </aside>
);

const Header = ({ activePage }) => (
  <header className="flex items-center justify-between mb-8">
    <h1 className="text-3xl font-bold text-gray-800">{activePage}</h1>
    <div className="flex items-center space-x-4">
        <div className="relative">
            <img className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/E2E8F0/4A5568?text=AV" alt="User Avatar" />
            <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div>
            <p className="font-semibold text-gray-800">Demo User</p>
            <p className="text-sm text-gray-500">Growth Plan</p>
        </div>
    </div>
  </header>
);

const MainLayout = ({ children, activePage, setActivePage, onLogout }) => (
  <div className="flex min-h-screen bg-gray-100 font-sans">
    <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={onLogout} />
    <main className="flex-1 p-6 sm:p-8 lg:p-10">
      <Header activePage={activePage} />
      {children}
    </main>
  </div>
);


// --- Main App ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch(activePage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Connect':
        return <ConnectAccountsPage />;
      default:
        return <DashboardPage />;
    }
  }

  return (
    <MainLayout activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout}>
      {renderPage()}
    </MainLayout>
  );
}