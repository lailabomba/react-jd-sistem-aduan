import React, { useState } from 'react';

const BorangAduan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Aduan anda telah dihantar!');
    setFormData({ name: '', email: '', complaint: '' }); // Reset form
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4">Borang Aduan</h1>
      <p className="mb-6">Isi borang aduan untuk melaporkan sebarang isu atau masalah.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Nama:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="complaint" className="block mb-2 text-sm font-medium">Aduan:</label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Hantar Aduan
        </button>
      </form>
    </div>
  );
};

export default BorangAduan;