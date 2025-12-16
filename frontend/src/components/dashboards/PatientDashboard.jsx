import React from 'react';
import { User } from 'lucide-react';

const PatientDashboard = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
                <User className="text-indigo-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">Patient Dashboard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">My Profile</h3>
                    <p className="text-gray-600">View and update your personal information</p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">My Appointments</h3>
                    <p className="text-gray-600">Schedule and manage appointments</p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Medical Records</h3>
                    <p className="text-gray-600">Access your medical history</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Find Doctors</h3>
                    <p className="text-gray-600">Search for healthcare providers</p>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
