import React from 'react';
import { Users } from 'lucide-react';

const AssistantDashboard = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
                <Users className="text-indigo-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">Assistant Dashboard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Appointments</h3>
                    <p className="text-gray-600">Manage doctor's appointments</p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Patient Queue</h3>
                    <p className="text-gray-600">Track patient visits</p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Schedule</h3>
                    <p className="text-gray-600">View doctor's schedule</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Messages</h3>
                    <p className="text-gray-600">Communicate with patients</p>
                </div>
            </div>
        </div>
    );
};

export default AssistantDashboard;
