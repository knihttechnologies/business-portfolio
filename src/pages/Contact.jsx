import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PagesLayout } from '../layouts/Layout';

const Contact = ({ isSummary = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Replace with your actual backend endpoint
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      setStatus('Message sent successfully! Thanks for reaching out.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  const content = (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg mb-6">
        Get in touch with us for a consultation or to learn more about our services.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"/>
              {/* Contact Info */}
              <div className="space-y-2 rounded-xl p-4 shadow-lg border border-sky-200 dark:border-sky-700">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="mr-2 text-sky-500" />
                  <p className="text-gray-700 dark:text-gray-300">123 Tech Lane, Innovation City, 45678</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone size={20} className="mr-2 text-sky-500" />
                  <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2 text-sky-500" />
                  <p className="text-gray-700 dark:text-gray-300">info@knihttechnologies.com</p>
                </div>
              </div>
             <button type="submit"
              className="bg-blue-600 text-white p-2 sm:p-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>

        {/* Map & Info */}
        {!isSummary && (
          <div className="space-y-4">
            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="KNIHT Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363155042!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Tech%20Lane%2C%20Innovation%20City%2C%2045678!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Contact Info */}
            <div className="space-y-2 bg-white/10 rounded-xl p-4 shadow-lg">
              <div className="flex items-center mb-2">
                <MapPin size={20} className="mr-2 text-blue-600" />
                <p>123 Tech Lane, Innovation City, 45678</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={20} className="mr-2 text-green-600" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-fuchsia-600" />
                <p>info@knihttechnologies.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <PagesLayout>
      <div className="container mx-auto px-4 mt-20 min-h-[calc(100vh-5rem)]">
        {content}
      </div>
    </PagesLayout>
  );
}

export default Contact;