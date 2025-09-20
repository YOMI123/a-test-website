import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Calendar, Award, Users, Smartphone } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection
}) => {
  const navItems = [
    { id: 'home', label: '首页', icon: <MapPin size={18} /> },
    { id: 'intro', label: '泸沽湖概览', icon: <MapPin size={18} /> },
    { id: 'culture', label: '文化传承', icon: <Award size={18} /> },
    { id: 'revitalization', label: '乡村振兴', icon: <Calendar size={18} /> },
    { id: 'tech', label: '科技赋能', icon: <Smartphone size={18} /> },
    { id: 'map', label: '互动地图', icon: <MapPin size={18} /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">泸沽湖镇</span>
          <span className="text-sm hidden md:inline-block text-neutral-600 dark:text-neutral-400">乡村文化·振兴·科技</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`flex items-center space-x-1.5 text-sm font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`flex items-center space-x-3 p-2 rounded-lg ${
                    activeSection === item.id 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;