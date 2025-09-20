import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CultureSection: React.FC = () => {
    const cultureThemes = [{
    id: 1,
    title: "摩梭母系文化",
    description: "泸沽湖是摩梭母系社会的核心区域，这里仍然保留着\"男不娶，女不嫁\"的走婚制度，以及母系大家庭的生活方式。摩梭人崇尚自然，信仰\"达巴教\"，重视家庭和谐与社区团结。",
     image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/mosuo-matriarchal-culture_20250920235106.jpg"
}, {
    id: 2,
    title: "传统节日庆典",
    description: "泸沽湖地区的传统节日丰富多彩，其中最著名的是\"转山节\"和\"朝山节\"。这些节日不仅是摩梭人祭祀神灵、庆祝丰收的重要场合，也是展示传统歌舞、服饰和习俗的文化盛宴。",
     image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/traditional-festival_20250920235247.jpg"
}, {
    id: 3,
    title: "手工艺术传承",
    description: "摩梭人的传统手工艺有着悠久的历史，包括纺织、银器制作、木雕和皮革加工等。这些手工艺不仅具有实用价值，更是摩梭文化的重要载体，如今正通过各种方式得到保护和传承。",
     image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/traditional-handicraft_20250920235251.jpg"
}, {
    id: 4,
    title: "民族歌舞艺术",
    description: "摩梭人能歌善舞，他们的传统音乐和舞蹈充满了浓郁的民族特色。\"甲搓舞\"是摩梭人最具代表性的集体舞蹈，而\"阿哈巴拉\"则是广为流传的民间歌曲形式。",
     image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/ethnic-dance-performance_20250920234854.jpg"
    }];

    const [activeIndex, setActiveIndex] = useState(0);

    const navigateTheme = (direction: "prev" | "next") => {
        if (direction === "prev") {
            setActiveIndex(prev => prev === 0 ? cultureThemes.length - 1 : prev - 1);
        } else {
            setActiveIndex(prev => prev === cultureThemes.length - 1 ? 0 : prev + 1);
        }
    };

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
                    className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">文化传承</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">泸沽湖地区拥有丰富而独特的民族文化，其中摩梭母系文化更是世界文化遗产的重要组成部分。这里的传统文化正通过各种方式得到保护和传承。
                                                                    </p>
            </motion.div>
            {}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px]">
                    {}
                    <div className="relative h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={cultureThemes[activeIndex].id}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                                className="absolute inset-0">
                                  {/* 文化传承模块 - 当前展示的主题图片 */}
                                  <img
                                    src={cultureThemes[activeIndex].image}
                                    alt={cultureThemes[activeIndex].title}
                                    className="w-full h-full object-cover" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {}
                    <div
                        className="bg-white dark:bg-neutral-800 p-8 lg:p-12 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${cultureThemes[activeIndex].id}`}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20
                                }}
                                transition={{
                                    duration: 0.5
                                }}>
                                <h3
                                    className="text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-white mb-4">
                                    {cultureThemes[activeIndex].title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                                    {cultureThemes[activeIndex].description}
                                </p>
                                {}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        {cultureThemes.map((_, index) => <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-blue-600 dark:bg-blue-400" : "bg-neutral-300 dark:bg-neutral-600"}`}
                                            aria-label={`查看${cultureThemes[index].title}`} />)}
                                    </div>
                                    <div className="flex space-x-2">
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05
                                            }}
                                            whileTap={{
                                                scale: 0.95
                                            }}
                                            className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                            onClick={() => navigateTheme("prev")}
                                            aria-label="上一个主题">
                                            <ChevronLeft size={20} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05
                                            }}
                                            whileTap={{
                                                scale: 0.95
                                            }}
                                            className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                            onClick={() => navigateTheme("next")}
                                            aria-label="下一个主题">
                                            <ChevronRight size={20} />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
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
                    delay: 0.2
                }}
                viewport={{
                    once: true
                }}
                className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                <h3
                    className="text-2xl font-bold text-neutral-800 dark:text-white mb-6 text-center">文化保护与传承计划</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">传统工艺振兴</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">建立传统手工艺传习所，培养年轻一代传承人，推动传统工艺与现代设计相结合，实现文化价值与经济价值的双赢。
                                                                                                </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">文化数字化记录</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">对摩梭族的语言、神话传说、音乐舞蹈等非物质文化遗产进行数字化记录和保存，建立文化资源数据库。
                                                                                                </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">社区文化活动</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">定期举办传统节日庆典、文化展示活动，增强社区居民的文化认同感和自豪感，吸引更多人了解和关注摩梭文化。
                                                                                                </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CultureSection;