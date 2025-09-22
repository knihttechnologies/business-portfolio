import { Home, User, Briefcase, Newspaper, Mail } from 'lucide-react';

const homeNavLinks = [
  { id: 1, name: 'Home', path: '/', anchor: 'home', icon: <Home size={20} /> },
  { id: 2, name: 'About', path: '/about', anchor: 'about', icon: <User size={20} /> },
  { id: 3, name: 'Services', path: '/services', anchor: 'services', icon: <Briefcase size={20} /> },
  { id: 4, name: 'Portfolio', path: '/portfolio', anchor: 'portfolio', icon: <Newspaper size={20} /> },
  { id: 5, name: 'Contact', path: '/contact', anchor: 'contact', icon: <Mail size={20} /> },
];

export { 
  homeNavLinks 
};