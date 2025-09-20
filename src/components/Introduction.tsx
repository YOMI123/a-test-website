import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

const Introduction: React.FC = () => {
  // 泸沽湖镇基本信息
  const townInfo = {
    location: '四川省凉山彝族自治州盐源县',
    population: '约1.2万人',
    area: '约253.8平方公里',
    altitude: '约2690米',
    featured: '摩梭文化、高原湖泊、生态旅游'
  };

  // 统计数据
  const stats = [
    { icon: <Users size={24} />, label: '人口', value: '约12,000人' },
    { icon: <MapPin size={24} />, label: '面积', value: '253.8平方公里' },
    { icon: <Calendar size={24} />, label: '最佳旅游季节', value: '4-10月' },
    { icon: <Award size={24} />, label: '特色文化', value: '摩梭母系文化' }
  ];

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">泸沽湖镇概览</h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 左侧图片 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
         {/* 泸沽湖镇概览模块 - 泸沽湖航拍全景图 */}
           <img 
               src="https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/lugu-lake-aerial_20250920234924.jpg" 
               alt="泸沽湖全景" 
               className="w-full h-[400px] object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-xl font-bold">高原明珠 · 泸沽湖</h3>
            <p className="text-white/80">位于四川与云南交界处的神秘湖泊</p>
          </div>
        </motion.div>
        
        {/* 右侧内容 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-white">自然与文化的完美融合</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            泸沽湖镇位于四川省凉山彝族自治州盐源县西北部，是一个以摩梭族为主体的多民族聚居地。这里拥有世界文化遗产级别的摩梭母系文化，以及被誉为"高原明珠"的泸沽湖自然风光。
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            近年来，泸沽湖镇在乡村振兴战略的指导下，积极发展生态旅游、特色农业和文化产业，同时借助科技力量提升当地居民生活水平，保护生态环境，实现了可持续发展。
          </p>
          
          {/* 统计数据卡片 */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2">{stat.icon}</div>
                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.label}</h4>
                <p className="text-lg font-bold text-neutral-800 dark:text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;