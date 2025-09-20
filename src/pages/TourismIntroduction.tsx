import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TourismIntroduction: React.FC = () => {
     const tourismProjects = [{
        id: 1,
        name: "猪槽船游泸沽湖",
        description: "猪槽船是泸沽湖特有的水上交通工具，因其形状酷似猪槽而得名。乘坐猪槽船游览泸沽湖是体验当地文化和自然风光的最佳方式之一。船工通常为当地摩梭人，他们会一边划船一边讲述泸沽湖的传说故事。",
        features: ["传统摩梭人划船技艺", "欣赏湖光山色和湖中小岛", "聆听摩梭人讲述民间传说", "季节性花海观赏（5-10月）", "可能邂逅迁徙鸟类"],
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/pig-trough-boat_20250920235118.jpg"
    }, {
        id: 2,
        name: "走婚桥草海",
        description: "走婚桥位于泸沽湖东南侧，是连接两岸村落的木桥，也是摩梭人走婚文化的重要象征。桥下是广阔的草海湿地，生长着茂密的芦苇和各种水生植物，是许多鸟类的栖息地。",
        features: ["体验摩梭人走婚文化", "漫步湿地木栈道", "观赏高原湿地生态系统", "季节性候鸟观赏", "传统摩梭民歌表演（特定节日）"],
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/walking-marriage-bridge_20250920235302.jpg"
    }];

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-neutral-50 to-blue-50 dark:from-neutral-900 dark:to-blue-950">
            {}
            <div className="fixed top-4 left-4 z-10">
                <Link to="/">
                    <motion.button
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        className="p-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full shadow-md text-neutral-800 dark:text-white">
                        <ArrowLeft size={20} />
                    </motion.button>
                </Link>
            </div>
            {}
            <div className="container mx-auto max-w-6xl px-4 py-20">
                {}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6
                    }}
                    className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">泸沽湖生态旅游项目</h1>
                    <div className="w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p
                        className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-lg">探索泸沽湖独特的自然景观和人文风情，体验摩梭文化的魅力
                                  </p>
                </motion.div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {tourismProjects.map((project, index) => <motion.div
                        key={project.id}
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2 * index
                        }}
                        className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        {}
                        <div className="relative h-64 overflow-hidden">
                            {/* 泸沽湖生态旅游项目详情页 - 旅游项目展示图片 */}
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                        {}
                        <div className="p-6">
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            {}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">项目特色</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => <li key={i} className="flex items-start">
                                        <div
                                            className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                                        </div>
                                        <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                                    </li>)}
                                </ul>
                            </div>
                            {}
                            <div
                                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 italic">建议游览时间：{project.id === 1 ? "2-3小时" : "1-2小时"}| 最佳季节：4-10月
                                                      </p>
                            </div>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </div>
    );
};

export default TourismIntroduction;