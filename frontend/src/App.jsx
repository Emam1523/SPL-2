import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Alert from './components/common/Alert';
import LoginView from './components/auth/LoginView';
import RegisterView from './components/auth/RegisterView';
import PatientDashboard from './components/dashboards/PatientDashboard';
import DoctorDashboard from './components/dashboards/DoctorDashboard';
import AssistantDashboard from './components/dashboards/AssistantDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';

const App = () => {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const uid = localStorage.getItem('uid');
    if (token && role && uid) {
      setUser({ token, role, uid });
      setCurrentView(getDashboardView(role));
    }
  }, []);

  const getDashboardView = (role) => {
    switch (role) {
      case 'PATIENT': return 'patientDashboard';
      case 'DOCTOR': return 'doctorDashboard';
      case 'ASSISTANT': return 'assistantDashboard';
      case 'ADMIN': return 'adminDashboard';
      default: return 'login';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('uid');
    setUser(null);
    setCurrentView('login');
    setSuccess('Logged out successfully');
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(''), 5000);
  };

  const showSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header user={user} onLogout={handleLogout} />

      <Alert type="error" message={error} />
      <Alert type="success" message={success} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'login' && (
          <LoginView
            setCurrentView={setCurrentView}
            setUser={setUser}
            showError={showError}
            showSuccess={showSuccess}
          />
        )}
        {currentView === 'register' && (
          <RegisterView
            setCurrentView={setCurrentView}
            showError={showError}
            showSuccess={showSuccess}
          />
        )}
        {currentView === 'patientDashboard' && (
          <PatientDashboard />
        )}
        {currentView === 'doctorDashboard' && (
          <DoctorDashboard user={user} showError={showError} showSuccess={showSuccess} />
        )}
        {currentView === 'assistantDashboard' && (
          <AssistantDashboard />
        )}
        {currentView === 'adminDashboard' && (
          <AdminDashboard user={user} showError={showError} showSuccess={showSuccess} />
        )}
      </main>
    </div>
  );
};

export default App;
