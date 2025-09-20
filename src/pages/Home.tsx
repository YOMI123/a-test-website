import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, Map, Calendar, Award, Users, Smartphone, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Introduction from '@/components/Introduction';
import CultureSection from '@/components/CultureSection';
import RuralRevitalization from '@/components/RuralRevitalization';
import TechEmpowerment from '@/components/TechEmpowerment';
import InteractiveMap from '@/components/InteractiveMap';
import Footer from '@/components/Footer';

 // 模拟数据 - 游客增长统计
  const touristData = [
  { year: '2019', visitors: 120 },
  { year: '2020', visitors: 85 },
  { year: '2021', visitors: 145 },
  { year: '2022', visitors: 180 },
  { year: '2023', visitors: 230 },
  { year: '2024', visitors: 290 },
  ];

  // 模拟数据 - 乡村振兴成果
  const revitalizationData = [
  { category: '生态保护', value: 85 },
  { category: '文化传承', value: 90 },
  { category: '经济发展', value: 75 },
  { category: '基础设施', value: 80 },
  { category: '科技应用', value: 70 },
  ];

   // 模拟数据 - 特色产业
  const industriesData = [
  { 
    id: 1, 
    name: '高原生态农业', 
    description: '利用泸沽湖地区独特的高原气候条件，发展有机农业和特色种植',
    image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/plateau-ecological-agriculture_20250920235124.jpg'
  },
  { 
    id: 2, 
    name: '生态旅游', 
    description: '依托泸沽湖的自然风光和摩梭文化，发展可持续旅游产业',
    image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/eco-tourism_20250920234846.jpg'
  },
  { 
    id: 3, 
    name: '特色手工艺', 
    description: '传承和发展摩梭族传统手工艺，如纺织、银器制作等',
    image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/traditional-handicraft-artisan_20250920235259.jpg'
  }
  ];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 引用各部分，用于滚动检测
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    intro: useRef<HTMLDivElement>(null),
    culture: useRef<HTMLDivElement>(null),
    revitalization: useRef<HTMLDivElement>(null),
    tech: useRef<HTMLDivElement>(null),
    map: useRef<HTMLDivElement>(null),
  };

  // 监听滚动事件，更新当前活跃的部分和导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      // 更新导航栏样式
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 确定当前可见的部分
      const currentPosition = window.scrollY + 100;
      
      for (const section in sectionRefs) {
        const ref = sectionRefs[section as keyof typeof sectionRefs];
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          
          if (currentPosition >= offsetTop && currentPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动到指定部分
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-blue-50 dark:from-neutral-900 dark:to-blue-950 text-neutral-800 dark:text-neutral-200 font-sans">
      {/* 导航栏 */}
      <Navigation 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      {/* 英雄区域 */}
      <section ref={sectionRefs.home}>
        <HeroSection scrollToSection={scrollToSection} />
      </section>
       
      {/* 泸沽湖镇简介 */}
      <section ref={sectionRefs.intro} className="py-20 px-4 md:px-8 lg:px-16">
        <Introduction />
      </section>
      
      {/* 文化传承 */}
      <section ref={sectionRefs.culture} className="py-20 px-4 md:px-8 lg:px-16">
        <CultureSection />
      </section>
      
       {/* 乡村振兴 */}
      <section ref={sectionRefs.revitalization} className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-neutral-800 shadow-sm">
         <RuralRevitalization 
          industriesData={industriesData}
          revitalizationData={revitalizationData}
          scrollToSection={scrollToSection}
        />
      </section>
      
      {/* 科技赋能 */}
      <section ref={sectionRefs.tech} className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-neutral-800 shadow-sm">
        <TechEmpowerment touristData={touristData} />
      </section>
      
      {/* 互动地图 */}
      <section ref={sectionRefs.map} className="py-20 px-4 md:px-8 lg:px-16">
        <InteractiveMap />
      </section>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}