"use client";

import { useState } from 'react';
import { Bell, Clock, FileText, Plus, Pencil, Eye, Trash2, Megaphone, Atom, ListTodo, Shield, Home, X, Calendar } from 'lucide-react';

const sidebarItems = [
  { icon: Atom, label: 'Research Page', color: 'from-cyan-400 to-blue-500', active: false },
  { icon: Megaphone, label: 'Announcements', color: 'from-yellow-400 to-orange-500', active: true },
  { icon: ListTodo, label: 'Submissions', color: 'from-purple-400 to-purple-600', active: false },
  { icon: Shield, label: 'Compliance', color: 'from-blue-400 to-blue-600', active: false },
];

export default function URDSDashboard() {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    deadline: '',
    guidelines: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ title: '', description: '', startDate: '', deadline: '', guidelines: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex">
      {/* Sidebar */}
      <div className="w-20 bg-white py-6 flex flex-col items-center gap-2 fixed left-4 top-4 bottom-4 z-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
          <span className="text-white font-bold text-sm">UCP</span>
        </div>
        
        <div className="flex flex-col gap-3 flex-1 relative">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group -mr-4 ml-auto transform translate-x-4 hover:translate-x-6 ${
                activeTab === index 
                  ? 'bg-gradient-to-br ' + item.color + ' shadow-[0_8px_25px_rgba(0,0,0,0.25)] scale-110 z-20' 
                  : 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] z-10'
              }`}
            >
              <item.icon className={`w-7 h-7 ${activeTab === index ? 'text-white' : 'text-gray-500'}`} />
              <div className="absolute left-20 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                {item.label}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <img src="https://i.imgur.com/YqQYz1S.png" alt="URDS Logo" className="w-14 h-14 object-contain"/>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-28 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  University Research & Development Services
                </h1>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 hidden md:flex items-center justify-center overflow-hidden">
                <span className="text-xs font-bold text-center leading-tight">EASTERN<br/>UNIV</span>
              </div>
            </div>

            {/* Announcement Banner */}
            <div className="relative">
              <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                New Announcement
              </span>
              <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-3 text-white text-center min-w-16">
                  <div className="text-xs">TODAY</div>
                  <div className="text-xl font-bold">17:00</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm md:text-base">
                    The University Research and Development Services (URDS) is now accepting Research Proposals for the Academic Year 2024-2025. Please review the guidelines and submit your proposal before the deadline.
                  </p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Deadline: Oct 13, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Guidelines Available
                    </span>
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:underline whitespace-nowrap">
                  View All
                </button>
                <div className="hidden md:block">
                  <Megaphone className="w-16 h-16 text-orange-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Director Dashboard */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-700">URDS DIRECTOR DASHBOARD</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                  Submissions
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center gap-2 text-gray-600 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-full transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
                  <span className="text-sm">Create New Call For Proposals</span>
                </button>
              </div>
            </div>

            {/* Posted Calls Table */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">Posted Calls for Proposals</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Title</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Start Date</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Deadline</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-gray-400">No proposals yet. Click "Create New Call For Proposals" to add one.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Create New Call For Proposals</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Announcement Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter proposal title..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter proposal description..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deadline <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Guidelines */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guidelines / Attachments
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                    <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Drag & drop files here or <span className="text-emerald-500 font-medium">browse</span></p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
              >
                Create Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}