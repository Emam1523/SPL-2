import React, { useState } from 'react';
import { User } from 'lucide-react';
import { apiClient } from '../../utils/api';

const LoginView = ({ setCurrentView, setUser, showError, showSuccess }) => {
    const [formData, setFormData] = useState({ phoneNumber: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await apiClient.post('/auth/login', formData);
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);
                localStorage.setItem('uid', data.uid);
                setUser(data);
                showSuccess('Login successful!');

                // Navigate to appropriate dashboard
                const dashboardMap = {
                    'PATIENT': 'patientDashboard',
                    'DOCTOR': 'doctorDashboard',
                    'ASSISTANT': 'assistantDashboard',
                    'ADMIN': 'adminDashboard'
                };
                setCurrentView(dashboardMap[data.role]);
            } else {
                showError(data.message || 'Login failed');
            }
        } catch (error) {
            showError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-6">
                    <User className="text-indigo-600" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        New patient?{' '}
                        <button
                            onClick={() => setCurrentView('register')}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                            Register here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
