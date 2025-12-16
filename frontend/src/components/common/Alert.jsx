import React from 'react';
import { AlertCircle } from 'lucide-react';

const Alert = ({ type, message }) => {
    if (!message) return null;

    const styles = {
        error: 'bg-red-50 border-red-200 text-red-800',
        success: 'bg-green-50 border-green-200 text-green-800',
    };

    return (
        <div className="max-w-7xl mx-auto px-4 mt-4">
            <div className={`${styles[type]} border rounded-lg p-4 flex items-center gap-2`}>
                {type === 'error' && <AlertCircle size={20} />}
                {message}
            </div>
        </div>
    );
};

export default Alert;
