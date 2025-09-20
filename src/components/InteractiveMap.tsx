import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Info, ChevronRight } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  // 泸沽湖镇主要景点数据
  const attractions = [
    {
      id: 1,
      name: '泸沽湖国家级风景名胜区',
      description: '泸沽湖以其清澈的湖水、优美的自然风光和独特的摩梭文化而闻名于世，是国家级重点风景名胜区。',
      coordinates: { x: 45, y: 50 },
         image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/lugu-lake-aerial_20250920234924.jpg'
    },
    {
      id: 2,
      name: '里格半岛',
      description: '里格半岛是泸沽湖最具代表性的景点之一，半岛三面环水，形状独特，风景秀丽。',
      coordinates: { x: 30, y: 40 },
         image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/rige-peninsula_20250920235134.jpg'
    },
    {
      id: 3,
      name: '摩梭民俗博物馆',
      description: '博物馆展示了摩梭人的历史文化、生活习俗和艺术成就，是了解摩梭文化的重要窗口。',
      coordinates: { x: 65, y: 35 },
         image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/mosuo-culture-museum_20250920235053.jpg'
    },
    {
      id: 4,
      name: '草海湿地',
      description: '草海是泸沽湖的重要组成部分，这里生长着茂密的芦苇，是众多鸟类的栖息地。',
      coordinates: { x: 55, y: 65 },
         image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/grass-sea-wetland_20250920234915.jpg'
    },
    {
      id: 5,
      name: '格姆女神山',
      description: '格姆女神山是摩梭人心中的神山，海拔3754米，山顶可以俯瞰泸沽湖全景。',
      coordinates: { x: 20, y: 25 },
         image: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/gemu-goddess-mountain_20250920234911.jpg'
    }
  ];

  // 季节性活动数据
  const seasonalActivities = [
    {
      id: 1,
      season: '春季 (3-5月)',
      activities: ['观赏杜鹃花', '参加转山节', '春季农耕体验']
    },
    {
      id: 2,
      season: '夏季 (6-8月)',
      activities: ['草海划船', '摩梭家访', '篝火晚会']
    },
    {
      id: 3,
      season: '秋季 (9-11月)',
      activities: ['观赏红叶', '品尝丰收果实', '参加朝山节']
    },
    {
      id: 4,
      season: '冬季 (12-2月)',
      activities: ['欣赏雪景', '温泉体验', '传统手工艺制作']
    }
  ];

  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);
  const [activeSeason, setActiveSeason] = useState(0);

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">互动地图</h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          探索泸沽湖镇的自然景观、文化景点和特色活动，规划您的乡村之旅。
        </p>
      </motion.div>

      {/* 地图和信息展示区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 交互式地图 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-4 md:p-6"
        >
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">景点分布</h3>
          <div className="relative h-[400px] md:h-[500px] bg-blue-50 dark:bg-blue-900/20 rounded-xl overflow-hidden">
            {/* 简化版地图背景 */}
            <div className="absolute inset-0 opacity-60">
                {/* 互动地图模块 - 泸沽湖景区地图背景 */}
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Map%20of%20Lugu%20Lake%20tourist%20attractions%2C%20clear%20water%2C%20mountains%2C%20villages%2C%20peninsula%2C%20plateau%20lake%2C%20blue%20water&sign=ed2247f6faa46e0601f658e224512dbd" 
                  alt="泸沽湖景区地图" 
                  className="w-full h-full object-cover"
                />
            </div>
            
            {/* 景点标记 */}
            {attractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                className="absolute cursor-pointer"
                style={{ 
                  left: `${attraction.coordinates.x}%`, 
                  top: `${attraction.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedAttraction(attraction.id)}
              >
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full 
                  ${selectedAttraction === attraction.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-md'
                  }
                  transition-all duration-300
                `}>
                  <MapPin size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 景点信息和季节性活动 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* 景点详情 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="h-40 overflow-hidden">
              {/* 互动地图模块 - 选中景点的详细图片 */}
              <img 
                 src={selectedAttraction 
                   ? attractions.find(a => a.id === selectedAttraction)?.image 
                   : attractions[0].image
                 } 
                 alt={selectedAttraction 
                   ? attractions.find(a => a.id === selectedAttraction)?.name 
                   : attractions[0].name
                 } 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">
                {selectedAttraction 
                  ? attractions.find(a => a.id === selectedAttraction)?.name 
                  : attractions[0].name
                }
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {selectedAttraction 
                  ? attractions.find(a => a.id === selectedAttraction)?.description 
                  : attractions[0].description
                }
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm"
              >
                <span>查看详情</span>
                <ChevronRight size={14} className="ml-1" />
              </motion.button>
            </div>
          </div>
          
          {/* 季节性活动 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-white">季节性活动</h3>
                <div className="flex space-x-1">
                  {seasonalActivities.map((season, index) => (
                    <button
                      key={season.id}
                      onClick={() => setActiveSeason(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSeason 
                          ? 'w-6 bg-blue-600 dark:bg-blue-400' 
                          : 'bg-neutral-300 dark:bg-neutral-600'
                      }`}
                      aria-label={season.season}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Calendar size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-white">
                  {seasonalActivities[activeSeason].season}
                </h4>
              </div>
              <ul className="space-y-3">
                {seasonalActivities[activeSeason].activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-600 dark:text-blue-400">
                      <Info size={14} />
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 旅游推荐路线 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">精品旅游路线推荐</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">文化体验之旅</h4>
              <ul className="space-y-2 text-white/90">
                <li>• 摩梭民俗博物馆</li>
                <li>• 摩梭家访体验</li>
                <li>• 传统手工艺制作</li>
                <li>• 篝火晚会</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">自然风光之旅</h4>
              <ul className="space-y-2 text-white/90">
                <li>• 里格半岛观景</li>
                <li>• 草海湿地徒步</li>
                <li>• 格姆女神山登山</li>
                <li>• 环湖自行车骑行</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">生态农业之旅</h4>
              <ul className="space-y-2 text-white/90">
                <li>• 高原生态农场参观</li>
                <li>• 水果采摘体验</li>
                <li>• 农产品加工体验</li><li>• 农家美食品尝</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveMap;