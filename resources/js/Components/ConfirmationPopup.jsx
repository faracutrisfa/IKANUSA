import React from 'react';

export default function ConfirmationPopup({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-gray-500 text-darker-blue bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold ">Konfirmasi</h3>
                <p className="mt-2">{message}</p>
                <div className="mt-4 flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="hover:text-dark-blue-hover"
                    >
                        Batal
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 py-2 px-4 rounded-md"
                    >
                        Konfirmasi
                    </button>
                </div>
            </div>
        </div>
    );
}
