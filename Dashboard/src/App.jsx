// App.jsx
import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  PlusCircle, 
  Menu, 
  MapPin, 
  AlertCircle, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-blue-800 text-white transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-16'
        } flex flex-col`}
      >
        {/* Logo and toggle */}
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          {sidebarOpen && <h1 className="text-xl font-bold">Search Ops</h1>}
          <button onClick={toggleSidebar} className="p-1 rounded hover:bg-blue-700">
            <Menu size={20} />
          </button>
        </div>

        {/* Quick Actions Section */}
        <div className="p-4">
          {sidebarOpen && <h2 className="text-sm uppercase text-blue-300 mb-2">Quick Actions</h2>}
          
          <div className="space-y-2">
            <QuickActionButton 
              icon={<Search />} 
              text="Start a new search" 
              isOpen={sidebarOpen} 
              isPrimary={true}
            />
            <QuickActionButton 
              icon={<FileText />} 
              text="Access reports pending" 
              isOpen={sidebarOpen} 
            />
            <QuickActionButton 
              icon={<PlusCircle />} 
              text="Add an incident or object" 
              isOpen={sidebarOpen} 
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="mt-6 flex-grow">
          {sidebarOpen && <h2 className="text-sm uppercase text-blue-300 mb-2 px-4">Navigation</h2>}
          
          <nav className="space-y-1">
            <NavItem icon={<MapPin />} text="Operations Map" isOpen={sidebarOpen} isActive={true} />
            <NavItem icon={<AlertCircle />} text="Incidents" isOpen={sidebarOpen} />
            <NavItem icon={<Users />} text="Team Members" isOpen={sidebarOpen} />
            <NavItem icon={<Settings />} text="Settings" isOpen={sidebarOpen} />
          </nav>
        </div>

        {/* Logout Option */}
        <div className="p-4 border-t border-blue-700">
          <NavItem icon={<LogOut />} text="Logout" isOpen={sidebarOpen} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Monitored Search System</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
              </div>
              <button className="p-2 bg-gray-100 rounded-full">
                <img 
                  src="/api/placeholder/40/40" 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Map Area */}
        <main className="flex-grow p-6">
          <div className="bg-white rounded-lg shadow-md h-full overflow-hidden">
            {/* Map Container */}
            <div className="relative h-full">
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-blue-500 mb-2" />
                  <h2 className="text-xl font-semibold text-gray-700">Operations Map</h2>
                  <p className="text-gray-500">Showing 3 active search operations</p>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-md shadow-md p-2">
                <div className="flex flex-col space-y-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 3H3v18h18V3z"></path>
                      <path d="M9 3v18"></path>
                      <path d="M3 9h6"></path>
                      <path d="M3 15h6"></path>
                      <path d="M15 3v18"></path>
                      <path d="M15 9h6"></path>
                      <path d="M15 15h6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Status Bar */}
        <footer className="bg-white border-t border-gray-200 p-3 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <span>3 active searches • 2 pending reports • Last updated: 14:32</span>
            <span>System status: Online</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Component for quick action buttons
function QuickActionButton({ icon, text, isOpen, isPrimary = false }) {
  return (
    <button 
      className={`flex items-center w-full p-2 rounded-md transition-colors ${
        isPrimary 
          ? 'bg-blue-600 hover:bg-blue-500' 
          : 'hover:bg-blue-700'
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </button>
  );
}

// Component for navigation items
function NavItem({ icon, text, isOpen, isActive = false }) {
  return (
    <a 
      href="#" 
      className={`flex items-center px-4 py-3 transition-colors ${
        isActive 
          ? 'bg-blue-700 text-white' 
          : 'text-blue-100 hover:bg-blue-700'
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </a>
  );
}

export default App;