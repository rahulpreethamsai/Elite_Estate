import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      alert(`Message from ${formData.email} sent!`);
      setFormData({ email: '', message: '' });
    } else {
      alert("Please fill out both email and message fields.");
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Navbar />
      <main className="flex-grow max-w-md mx-auto p-8 my-10 w-full bg-white shadow-xl rounded-xl border">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md font-bold text-white bg-purple-700 hover:bg-purple-800 transition"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}