import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HandicraftIntroduction: React.FC = () => {
  // 手工艺数据
  const handicraft = {
    id: 1,
    name: "摩梭手工纺织",
    description: "摩梭手工纺织是泸沽湖地区摩梭人世代相传的传统手工艺，拥有超过千年的历史。这种纺织工艺以其精湛的技艺、独特的图案和浓郁的民族特色而闻名。摩梭妇女从小学习纺织技艺，将其视为女性必备的技能和文化传承的重要载体。",
    features: [
      "使用传统腰机织布技术，无需电力驱动",
      "采用天然植物染料，色彩持久且对环境友好",
      "图案多反映摩梭人的生活、信仰和自然环境",
      "主要产品包括腰带、披肩、围巾和传统服饰"
    ],
    productionProcess: [
      "羊毛/麻线准备：选取优质羊毛或麻，经过清洗、梳理和捻线",
      "染料制作：采用当地植物如核桃皮、茜草、板蓝根等制作天然染料",
      "染色工艺：将线绳放入染料中反复浸泡、晾晒，获得所需颜色",
      "织布过程：使用传统腰机，通过脚蹬、手织的方式完成织布",
      "成品加工：对织好的布料进行裁剪、缝制，制成各种成品"
    ],
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/mosuo-traditional-textile_20250920235111.jpg"
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">摩梭手工纺织</h1>
          <div className="w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-lg">
            探索泸沽湖摩梭人传承千年的纺织技艺与文化内涵
          </p>
        </motion.div>

        {/* 手工艺介绍卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          {/* 手工艺图片 */}
          <div className="relative h-80 overflow-hidden">
            <img
               src={handicraft.image}
               alt={handicraft.name}
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h2 className="text-2xl font-bold text-white p-6">{handicraft.name}</h2>
            </div>
          </div>

          {/* 手工艺描述 */}
          <div className="p-6 md:p-8">
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              {handicraft.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* 工艺特点 */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">工艺特点</h3>
                <ul className="space-y-3">
                  {handicraft.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                      </div>
                      <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 制作流程 */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">制作流程</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  {handicraft.productionProcess.map((step, i) => (
                    <li key={i} className="text-neutral-600 dark:text-neutral-400 ml-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* 文化价值 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-3">文化价值与传承</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                摩梭手工纺织不仅是一种实用技艺，更是摩梭文化传承的重要载体。在摩梭母系社会中，纺织技艺由母亲传给女儿，象征着女性的智慧和家庭的延续。如今，这项传统工艺正面临现代化的挑战，但当地政府和文化保护组织正积极开展传承活动，通过设立传习所、举办培训班等方式，让更多年轻人了解和学习这一珍贵的非物质文化遗产。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HandicraftIntroduction;