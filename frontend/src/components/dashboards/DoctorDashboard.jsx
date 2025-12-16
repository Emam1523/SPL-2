import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { apiClient } from '../../utils/api';

const DoctorDashboard = ({ user, showError, showSuccess }) => {
    const [showAddAssistant, setShowAddAssistant] = useState(false);
    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await apiClient.post('/doctor/assistants', formData, user.token);
            const data = await response.text();

            if (response.ok) {
                showSuccess('Assistant added successfully!');
                setShowAddAssistant(false);
                setFormData({ phoneNumber: '', password: '', email: '', firstName: '', lastName: '' });
            } else {
                showError(data || 'Failed to add assistant');
            }
        } catch (error) {
            showError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="text-indigo-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h2>
            </div>

            <div className="mb-6">
                <button
                    onClick={() => setShowAddAssistant(!showAddAssistant)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    {showAddAssistant ? 'Cancel' : 'Add Assistant'}
                </button>
            </div>

            {showAddAssistant && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Assistant</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                            >
                                {loading ? 'Adding...' : 'Add Assistant'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">My Assistants</h3>
                    <p className="text-gray-600">Manage your assistant team</p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Appointments</h3>
                    <p className="text-gray-600">View and manage patient appointments</p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Patient Records</h3>
                    <p className="text-gray-600">Access patient medical records</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Schedule</h3>
                    <p className="text-gray-600">Manage your availability</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
