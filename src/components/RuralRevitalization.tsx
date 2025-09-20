import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface RuralRevitalizationProps {
    revitalizationData: Array<{
        category: string;
        value: number;
    }>;
    scrollToSection?: (sectionId: string) => void;
}

const RuralRevitalization: React.FC<RuralRevitalizationProps> = (
    {
        revitalizationData,
        scrollToSection
    }
) => {
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

    return (
        <div className="container mx-auto max-w-6xl">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6
                }}
                viewport={{
                    once: true
                }}
                className="text-center mb-12">
                <h2
                    className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">乡村振兴</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">泸沽湖镇积极响应国家乡村振兴战略，通过发展特色产业、改善基础设施、保护生态环境等多种举措，推动乡村经济社会全面发展。
                                                                                                            </p>
            </motion.div>
            {}
            <h3
                className="text-2xl font-bold text-neutral-800 dark:text-white mb-8 text-center">特色产业发展</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industriesData.map((industry, index) => <motion.div
                    key={industry.id}
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1 * index
                    }}
                    viewport={{
                        once: true
                    }}
                    className="group flex flex-col md:flex-row bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                     <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                        {/* 乡村振兴模块 - 特色产业图片 */}
                        <img
                             src={industry.image}
                             alt={industry.name}
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6 md:w-2/3">
                        <h4 className="text-xl font-bold text-neutral-800 dark:text-white mb-3">{industry.name}</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{industry.description}</p>
                        {industry.id === 1 ? <Link to="/crops">
                            <motion.button
                                whileHover={{
                                    x: 5
                                }}
                                className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                <span>了解更多</span>
                                <svg
                                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </motion.button>
                        </Link> : industry.id === 2 ? <Link to="/tours">
                            <motion.button
                                whileHover={{
                                    x: 5
                                }}
                                className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                <span>了解更多</span>
                                <svg
                                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </motion.button>
                        </Link> : industry.id === 3 ? <Link to="/handicrafts">
                            <motion.button
                                whileHover={{
                                    x: 5
                                }}
                                className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                <span>了解更多</span>
                                <svg
                                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </motion.button>
                        </Link> : <motion.button
                            whileHover={{
                                x: 5
                            }}
                            onClick={() => {
                                toast(`了解更多：${industry.name}`, {
                                    description: industry.description,
                                    duration: 3000,
                                    position: "bottom-center"
                                });
                            }}
                            className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                            <span>了解更多</span>
                            <svg
                                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </motion.button>}
                    </div>
                </motion.div>)}
            </div>
            {}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.4
                }}
                viewport={{
                    once: true
                }}
                className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="p-8 lg:p-12 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6">乡村振兴的真实故事</h3>
                        <p className="mb-6 leading-relaxed">"位于四川省凉山州盐源县的泸沽湖镇因优美的自然风光与独特的母系氏族人文风情而闻名，是中国知名旅游胜地。自2018年启动四川省基层统战工作示范创建后，这里正充分发挥统一战线法宝作用，加速驶入发展的“快车道”。"
                                                                                                                                                        </p>
                        <p className="mb-8 leading-relaxed">—— 凉山州盐源县泸沽湖镇副镇长杨翁机次尔
                                                                                                                                                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                                className="px-6 py-2 bg-white text-blue-700 font-medium rounded-full shadow-md transition-all duration-300"
                                onClick={() => {
                                    toast("乡村振兴故事集", {
                                        description: "本网站正在收集整理更多乡村振兴的真实故事，敬请期待！",
                                        duration: 3000,
                                        position: "bottom-center"
                                    });
                                }}>阅读更多故事
                                                                                                                                                                              </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                                className="px-6 py-2 bg-transparent border border-white text-white font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white/10"
                                onClick={() => {
                                    if (scrollToSection) {
                                        scrollToSection("map");
                                    }
                                }}>参与乡村振兴
                                                                                                                                                                              </motion.button>
                        </div>
                    </div>
                     <div className="h-64 lg:h-auto">
                        {/* 乡村振兴模块 - 乡村振兴故事配图 */}
                         <img
                              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/rural-revitalization-story_20250920235138.jpg"
                              alt="乡村振兴故事"
                              className="w-full h-full object-cover" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RuralRevitalization;