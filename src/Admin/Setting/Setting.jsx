import React from 'react';
import AdminNavbar from '../AdminNav/AdminNavbar';
import AdminTopBar from '../AdminNav/AdminTopBar';

const Settings = () => {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex-1">
        <AdminTopBar />
        <div className="p-6">
          <div className="bg-[#E5E5E5] p-4 rounded-lg mb-8">
            <h1 className="font-bold text-lg">Settings</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-[#D60A0B]">Home</span> &gt;{" "}
              <span className="text-gray-500">Settings</span>
            </div>
     
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                {/* Background Image */}
                <img
                  src="https://s3.envato.com/files/350567967/5.jpg"
                  alt="Background"
                  className="w-full h-48 object-cover"
                />
                {/* Profile Image */}
                <div className="absolute top-44 left-8 transform -translate-y-1/2">
                  <img
                    src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              </div>
              <div className="px-8 pt-24 pb-8">
                {/* Profile Name */}
                <h2 className="text-2xl font-semibold text-gray-800">
                  Prince Afful Quansah - Admin
                </h2>

                {/* Form */}
                <form className="mt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        School Name *
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="Firm Foundation School - Accra"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="arabagrant@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Mobile No
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="0264622310"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="Accra"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="Greater-Accra"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value="Prince Afful Quansah"
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value="**********"
                        />

                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Language
                      </label>
                      <select
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>English</option>
                        <option>French</option>
                        <option>Spanish</option>
                      </select>
                    </div>
                  </div>

                  {/* Save Button */}
                  <button className="mt-8 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
                    Save
                  </button>
                </form>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
