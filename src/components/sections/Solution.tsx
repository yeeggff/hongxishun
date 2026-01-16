import { motion } from 'framer-motion';
import { Zap, Box, LayoutTemplate } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Native Performance",
        subtitle: "3D 시뮬레이션 기반 학습",
        desc: "기계, 화학, 반도체 등 다양한 공학의 물리 현상과 실제 산업 기계의 작동 원리를 3D 시뮬레이션을 통해 학습하세요.",
        color: "from-blue-500 to-cyan-500", // 아이콘 및 글로우 색상
        img: "/assets/simulation-engine.jpg"
    },
    {
        icon: Box,
        title: "AI Engineering Tutor",
        subtitle: "3D CAD",
        desc: "학습한 이론을 적용하여 나만의 제품을 디자인하고 만들어보세요.",
        color: "from-purple-500 to-pink-500",
        img: "/assets/3d-cad.png"
    },
    {
        icon: LayoutTemplate,
        title: "Fluent Design",
        subtitle: "워크 플로우 차트",
        desc: "노드 기반의 플로우 차트를 통해 학습한 내용을 정리하거나 설계 중인 프로젝트를 체계화하세요.",
        color: "from-orange-500 to-amber-500",
        img: "/assets/workflow.png"
    }
];

export default function Solution() {
    return (
        <section id="features" className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600">전공 공부</span>를 게임처럼<br />
                        이론과 실습을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600">한 번에</span><br />
                    </motion.h2>
                </div>

                {/* Zig-Zag Feature List */}
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 space-y-6 text-left"
                        >
                            {/* Icon Badge */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] inline-block`}>
                                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                    <feature.icon size={28} className="text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl md:text-4xl font-bold leading-tight">
                                {feature.subtitle}
                            </h3>
                            <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-lg">
                                {feature.desc}
                            </p>


                        </motion.div>

                        {/* Visual Content (Image Card) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full relative isolate"
                        >
                            {/* 1. 카드 뒤쪽 배경 글로우 (카드 밖에서 빛나는 효과) */}
                            {/* z-index를 낮춰서 확실히 뒤로 보냅니다 */}
                            <div className={`absolute inset-8 bg-gradient-to-r ${feature.color} blur-[80px] opacity-40 -z-10`} />

                            {/* 2. 카드 컨테이너 */}
                            {/* aspect-[4/3] */}
                            <div className="relative aspect-[4/3] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl group">

                                {/* 3. 이미지 (가장 밑바닥에 배치) */}
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 z-0"
                                />

                                {/* 4. 유리 질감 & 내부 광원 효과 (이미지 위에 덮어씌움) */}
                                {/* z-10을 주어 이미지보다 위에 오게 함 */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 opacity-50 z-10 pointer-events-none mix-blend-overlay" />

                                {/* 5. 테두리 안쪽 글로우 (이미지 테두리가 빛나는 느낌 복원) */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20 mix-blend-screen pointer-events-none`} />

                                {/* 6. 호버 시 약간 어두워지거나 밝아지는 인터랙션 레이어 */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-30 pointer-events-none" />
                            </div>
                        </motion.div>

                    </div>
                ))}

            </div>
        </section>
    );
}
