import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-700 text-white py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">KNIHT Technologies</h3>
          <p className="text-white/80 mb-4">Empowering businesses with innovative digital solutions and expert guidance.</p>
          <div className="flex gap-4 mb-2">
            <a href="mailto:info@knihttechnologies.com" className="hover:text-yellow-400 transition">info@knihttechnologies.com</a>
            <span>|</span>
            <a href="tel:+15551234567" className="hover:text-yellow-400 transition">+1 (555) 123-4567</a>
          </div>
          <p className="text-sm">123 Tech Lane, Innovation City, 45678</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
            <li><a href="/news" className="hover:text-yellow-400 transition">News</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
          </div>
          <div className="text-xs text-white/60">&copy; {new Date().getFullYear()} KNIHT Technologies. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
