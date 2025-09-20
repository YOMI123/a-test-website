import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { Smartphone, Wifi, Database, Globe, ChevronRight } from "lucide-react";

interface TechEmpowermentProps {
    touristData: Array<{
        year: string;
        visitors: number;
    }>;
}

const TechEmpowerment: React.FC<TechEmpowermentProps> = (
    {
        touristData
    }
) => {
  const techApplications = [{
        id: 1,
        title: "智慧旅游",
        description: "通过物联网、大数据分析和移动应用，为游客提供智能化的旅游服务，包括智能导览、在线预订、个性化推荐等。",
        icon: <Globe size={28} />,
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/pig-trough-boat_20250920235118.jpg"
    }, {
        id: 2,
        title: "电商助农",
        description: "搭建农产品电商平台，连接农户和消费者，解决农产品销售难题，同时建立农产品质量追溯体系，保障食品安全。",
        icon: <Smartphone size={28} />,
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/ecommerce-agriculture_20250920234840.jpg"
    }, {
        id: 3,
        title: "数字文化保护",
        description: "利用3D扫描、虚拟现实等技术，对摩梭族传统建筑、文物和非物质文化遗产进行数字化记录和展示。",
        icon: <Database size={28} />,
         image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/313530087938/attachment/digital-cultural-preservation_20250920234837.jpg"
    }];

    const [activeTab, setActiveTab] = useState(0);

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
                    className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">科技赋能</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">泸沽湖镇借助现代科技力量，推动乡村数字化转型，促进文化保护、生态旅游和特色农业发展，为乡村振兴注入新动力。
                            </p>
            </motion.div>
            {}
            <></>
            {}
            <div className="space-y-6">
                {techApplications.map((tech, index) => <motion.div
                    key={tech.id}
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
                    className={`group flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                     <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                        {/* 科技赋能模块 - 科技应用图片 */}
                        <img
                            src={tech.image}
                            alt={tech.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:hidden"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white lg:hidden">
                            <div className="flex items-center mb-2">
                                <div className="mr-2 text-white">{tech.icon}</div>
                                <h4 className="text-xl font-bold">{tech.title}</h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-6 lg:p-8 lg:w-3/5 bg-white dark:bg-neutral-800 flex flex-col justify-center">
                        <div className="hidden lg:flex items-center mb-4">
                            <div className="mr-2 text-blue-600 dark:text-blue-400">{tech.icon}</div>
                            <h4 className="text-xl font-bold text-neutral-800 dark:text-white">{tech.title}</h4>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">{tech.description}</p>
                         <motion.button
                             whileHover={{
                                 x: 5
                             }}
                             className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
                             onClick={() => {
                                 toast(tech.title, {
                                     description: tech.description,
                                     duration: 5000,
                                     position: "bottom-center"
                                 });
                             }}>
                             <span>了解详情</span>
                             <ChevronRight size={16} className="ml-1 transition-transform duration-300" />
                         </motion.button>
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
                className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                <h3
                    className="text-2xl font-bold text-neutral-800 dark:text-white mb-6 text-center">未来科技发展规划</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">数字乡村建设</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">全面推进数字乡村建设，构建覆盖农业生产、乡村治理、公共服务等领域的数字化体系，提升乡村现代化水平。
                                        </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">智慧生态监测</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">建立泸沽湖生态环境监测系统，通过传感器网络和卫星遥感技术，实时监测水质、空气质量、植被覆盖等生态指标。
                                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TechEmpowerment;