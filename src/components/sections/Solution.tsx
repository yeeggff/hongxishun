import { motion } from 'framer-motion';

const features = [
    {
        title: "3D Physical Engine",
        subtitle: "자체 물리엔진 탑재",
        desc: "유체, 열, 동역학 등 복잡한 물리 현상을 수식으로만 배우지 마세요. 시뮬레이션으로 눈앞에서 직접 확인하고 이해할 수 있습니다.",
        align: "left"
    },
    {
        title: "AI Tutor",
        subtitle: "모르는 건 바로 질문",
        desc: "시뮬레이션 중 막히는 부분이 있나요? 실시간 AI 튜터가 현재 보고 있는 모델과 상황을 분석하여 즉시 답변해줍니다.",
        align: "right"
    },
    {
        title: "Web-based CAD",
        subtitle: "설치 없이 가볍게",
        desc: "무거운 프로그램 설치가 필요 없습니다. 웹 브라우저만 있다면 어디서든 모델링하고 실습할 수 있습니다.",
        align: "left"
    }
];

export default function Solution() {
    return (
        <section className="py-24 px-6 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        SIMVEX는 <span className="text-neon-blue">학습</span>과 <span className="text-sunset-orange">실습</span>을<br />
                        한 곳에 담았습니다.
                    </h2>
                </div>

                {features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                        {/* Text Side */}
                        <div className="flex-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-neon-blue font-bold tracking-wider uppercase text-sm">{feature.title}</span>
                                <h3 className="text-3xl md:text-4xl font-bold mt-2">{feature.subtitle}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mt-4">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        </div>

                        {/* Visual Side (Placeholder) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-gray-600 font-mono">Feature Visual: {feature.title}</span>
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    );
}
