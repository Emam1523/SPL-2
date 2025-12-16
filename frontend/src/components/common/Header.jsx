import React from 'react';
import { Stethoscope, LogOut } from 'lucide-react';

const Header = ({ user, onLogout }) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Stethoscope className="text-indigo-600" size={32} />
                    <h1 className="text-2xl font-bold text-gray-800">Healthcare System</h1>
                </div>
                {user && (
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            Role: <span className="font-semibold">{user.role}</span>
                        </span>
                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
