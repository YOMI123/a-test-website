import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
          {/* 首页主横幅 - 泸沽湖风光全景图 */}
          <img 
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/lugu-lake-scenery_20250920235045.jpg" 
            alt="泸沽湖风光" 
            className="w-full h-full object-cover object-center"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
      </div>
      
      {/* 文字内容 */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            泸沽湖镇乡村文化宣传
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            乡村文化 · 振兴发展 · 科技赋农
          </motion.p>
          
             <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('culture')}
              >
                探索文化
              </motion.button>
              
               <motion.button
               className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-lg transition-all duration-300"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => scrollToSection('revitalization')}
             >
               乡村振兴
             </motion.button>
             
             <motion.button
               className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-full shadow-lg transition-all duration-300 border border-white/40"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => scrollToSection('tech')}
             >
               科技赋能
             </motion.button>
            </motion.div>
        </motion.div>
        
        {/* 滚动提示 */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          onClick={() => scrollToSection('intro')}
        >
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-white/80 text-sm mb-2">向下滚动</span>
            <ChevronDown size={24} className="text-white/80" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;