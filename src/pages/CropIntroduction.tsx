import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CropIntroduction: React.FC = () => {
  // 作物数据
  const crops = [
    {
      id: 1,
      name: "摩梭红米",
      description: "摩梭红米是泸沽湖地区特有的高原红米品种，生长在海拔2600米以上的泸沽湖畔。由于高原昼夜温差大、日照时间长，加之摩梭人传统的有机耕作方式，使得这种红米富含蛋白质、氨基酸和多种微量元素，尤其是铁含量是普通大米的3-5倍。",
      features: [
        "富含铁质和维生素B群",
        "低升糖指数，适合控糖人群",
        "传统有机耕作，无农药化肥",
        "独特的高原生长环境造就独特口感"
      ],
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/red-rice-field_20250920235130.jpg"
    },
    {
      id: 2,
      name: "高原苹果",
      description: "泸沽湖高原苹果生长在海拔2400-2800米的山区，这里的苹果生长期长达180天，比低海拔地区长40天左右。充足的光照和较大的昼夜温差，使苹果积累了更多的糖分和芳香物质，口感脆甜多汁，风味独特。",
      features: [
        "糖度高达14-16度，风味浓郁",
        "果肉脆嫩，汁水丰富",
        "富含维生素C和抗氧化物质",
        "自然成熟，无催熟剂"
      ],
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/high-altitude-apple-orchard_20250920234918.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-blue-50 dark:from-neutral-900 dark:to-blue-950">
      {/* 返回按钮 */}
      <div className="fixed top-4 left-4 z-10">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full shadow-md text-neutral-800 dark:text-white"
          >
            <ArrowLeft size={20} />
          </motion.button>
        </Link>
      </div>

      {/* 页面内容 */}
      <div className="container mx-auto max-w-6xl px-4 py-20">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">高原特色作物</h1>
          <div className="w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-lg">
            泸沽湖独特的高原气候和生态环境，孕育了多种特色农产品，其中摩梭红米和高原苹果尤为著名
          </p>
        </motion.div>

        {/* 作物介绍卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {crops.map((crop, index) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* 作物图片 */}
              <div className="relative h-64 overflow-hidden">
                <img
                   src={crop.image}
                   alt={crop.name}
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h2 className="text-2xl font-bold text-white p-6">{crop.name}</h2>
                </div>
              </div>

              {/* 作物描述 */}
              <div className="p-6">
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {crop.description}
                </p>

                {/* 作物特点 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">主要特点</h3>
                  <ul className="space-y-2">
                    {crop.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                        </div>
                        <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 营养价值提示 */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 italic">
                    这些高原作物不仅是当地居民的主要食物来源，也是泸沽湖生态农业和乡村振兴的重要组成部分。
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropIntroduction;