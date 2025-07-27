import React, { useState, useEffect } from 'react';
import { BarChart2, Share2, Users2, LogOut, Download, ChevronsUpDown } from 'lucide-react';
import { getAccountData, getPlatformIcon, competitorData } from './data/mockData';
import './index.css';
// Import all page and component files
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ConnectAccountsPage from './pages/ConnectAccountPage';
import CompetitorPage from './pages/CompetitorPage';
import DateRangePicker from './components/DateRangePicker';

// --- Helper for CSV Export ---
const convertToCSV = (data) => {
    if (!data || data.length === 0) return "";
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => JSON.stringify(obj[header], (key, value) => value === undefined ? '' : value)));
    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
};

const downloadCSV = (data, filename) => {
    const csvString = convertToCSV(data);
    if (!csvString) {
        console.error("No data to export.");
        return;
    }
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// --- Layout Components ---
const AccountSwitcher = ({ accounts, selectedAccount, setSelectedAccount, setActivePage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedAccountData = getAccountData(selectedAccount);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-3 p-2 bg-white rounded-lg shadow-sm w-full text-left hover:bg-gray-50 border">
                {getPlatformIcon(selectedAccountData.platform, "w-10 h-10")}
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 capitalize">{selectedAccountData.platform}</p>
                    <p className="text-sm text-gray-500 truncate">{selectedAccountData.handle}</p>
                </div>
                <ChevronsUpDown className="w-5 h-5 text-gray-400" />
            </button>
            {isOpen && (
                <div onMouseLeave={() => setIsOpen(false)} className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg z-10 border">
                    <p className="p-3 text-xs font-semibold text-gray-400 uppercase">SELECT ACCOUNT</p>
                    {accounts.map(accId => {
                        const accData = getAccountData(accId);
                        return (
                            <div key={accId} onClick={() => { setSelectedAccount(accId); setIsOpen(false); }} className={`flex items-center space-x-3 p-3 hover:bg-gray-100 cursor-pointer ${selectedAccount === accId ? 'bg-blue-50' : ''}`}>
                                {getPlatformIcon(accData.platform, "w-8 h-8")}
                                <div><p className="font-semibold text-gray-800 capitalize">{accData.platform}</p></div>
                            </div>
                        )
                    })}
                    <div onClick={() => { setActivePage('Connect'); setIsOpen(false); }} className="p-3 border-t text-sm text-blue-600 font-semibold hover:bg-gray-100 cursor-pointer">
                        Connect new account...
                    </div>
                </div>
            )}
        </div>
    );
};

const Sidebar = ({ activePage, setActivePage, onLogout, ...props }) => (
  <aside className="w-72 bg-white shadow-md flex-shrink-0 hidden lg:flex flex-col p-4">
    <div className="h-20 flex items-center justify-center border-b pb-4">
      <BarChart2 className="w-8 h-8 text-blue-500" />
      <span className="ml-3 text-2xl font-bold text-gray-800">Socialytics</span>
    </div>
    <div className="py-6">
      <AccountSwitcher setActivePage={setActivePage} {...props} />
    </div>
    <nav className="flex-1 space-y-2">
      <a href="#" onClick={() => setActivePage('Dashboard')} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activePage === 'Dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <BarChart2 className="w-6 h-6" /> <span className="ml-4">My Dashboard</span>
      </a>
      <a href="#" onClick={() => setActivePage('Competitors')} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activePage === 'Competitors' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Users2 className="w-6 h-6" /> <span className="ml-4">Competitors</span>
      </a>
      <a href="#" onClick={() => setActivePage('Connect')} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activePage === 'Connect' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Share2 className="w-6 h-6" /> <span className="ml-4">Connect Accounts</span>
      </a>
    </nav>
    <div className="pt-6 border-t">
        <button onClick={onLogout} className="w-full flex items-center px-4 py-3 mt-2 rounded-lg text-red-500 hover:bg-red-50">
            <LogOut className="w-6 h-6" /> <span className="ml-4">Logout</span>
        </button>
    </div>
  </aside>
);

const Header = ({ activePage, dateRange, setDateRange, onExport }) => (
  <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
    <h1 className="text-3xl font-bold text-gray-800">{activePage}</h1>
    <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
      {activePage === 'Dashboard' && (
        <>
          <DateRangePicker activeRange={dateRange} setActiveRange={setDateRange} />
          <button onClick={onExport} className="flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-100 border">
            <Download className="w-5 h-5 mr-2" /> Export
          </button>
        </>
      )}
    </div>
  </header>
);

const MainLayout = ({ children, ...props }) => (
  <div className="flex min-h-screen bg-gray-100 font-sans">
    <Sidebar {...props} />
    <main className="flex-1 p-6 sm:p-8 lg:p-10">
      <Header {...props} />
      {children}
    </main>
  </div>
);

// --- Main App ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const [dateRange, setDateRange] = useState('30D');
  const [connectedAccounts, setConnectedAccounts] = useState(['twitter-123']);
  const [selectedAccount, setSelectedAccount] = useState('twitter-123');
  const [trackedCompetitors, setTrackedCompetitors] = useState(['@competitorA']); // New state for Phase 5

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  
  const handleConnectAccount = (accountId) => {
    if (!connectedAccounts.includes(accountId)) {
        setConnectedAccounts([...connectedAccounts, accountId]);
        setSelectedAccount(accountId);
        setActivePage('Dashboard');
    }
  };

  // New handler for Phase 5
  const handleAddCompetitor = (handle) => {
      if (!trackedCompetitors.includes(handle)) {
          setTrackedCompetitors([...trackedCompetitors, handle]);
      }
  };

  const handleExport = () => {
    const accountData = getAccountData(selectedAccount);
    downloadCSV(accountData.posts, `${accountData.platform}_posts_export.csv`);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch(activePage) {
      case 'Dashboard':
        return <DashboardPage account={getAccountData(selectedAccount)} dateRange={dateRange} />;
      // New case for Phase 5
      case 'Competitors':
        return <CompetitorPage trackedCompetitors={trackedCompetitors} onAddCompetitor={handleAddCompetitor} />;
      case 'Connect':
        return <ConnectAccountsPage connectedAccounts={connectedAccounts} onConnect={handleConnectAccount} />;
      default:
        return <DashboardPage account={getAccountData(selectedAccount)} dateRange={dateRange} />;
    }
  }

  return (
    <MainLayout 
      activePage={activePage} 
      setActivePage={setActivePage} 
      onLogout={handleLogout}
      dateRange={dateRange}
      setDateRange={setDateRange}
      onExport={handleExport}
      accounts={connectedAccounts}
      selectedAccount={selectedAccount}
      setSelectedAccount={setSelectedAccount}
    >
      {renderPage()}
    </MainLayout>
  );
}
