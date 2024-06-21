import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Sidebar</h2>
        </div>
        <div className="flex-grow p-4">
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <div className="bg-gray-200 p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold">Header</h2>
        </div>

        {/* Content Area */}
        <div className="flex-grow p-4">
          <h2 className="text-lg font-semibold">Main Content Area</h2>
          <p>
            This is the main content area where you can add your dashboard
            components and widgets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;