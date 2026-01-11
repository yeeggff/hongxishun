import { motion } from 'framer-motion';
import { BookOpen, DollarSign, Cog } from 'lucide-react';

const problems = [
    {
        icon: BookOpen,
        title: "이해 불가능한 2D 교재",
        desc: "평면적인 그림만으로는 복잡한 기계 구조와 작동 원리를 이해하기 어렵습니다.",
        img: "/assets/problem_book.png"
    },
    {
        icon: DollarSign,
        title: "상상을 초월하는 SW 비용",
        desc: "학생이 감당하기 힘든 수백만원 대의 전문가용 시뮬레이션 소프트웨어 비용.",
        img: "/assets/problem_cost.png"
    },
    {
        icon: Cog,
        title: "결국, 실무 적응 실패",
        desc: "이론만 배우고 실습을 놓치면 현장에서 필요한 엔지니어링 감각을 익힐 수 없습니다.",
        img: "/assets/problem_failure.png"
    }
];

export default function Problem() {
    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        공대생 2명 중 1명은 <br className="md:hidden" />
                        전공을 포기합니다. <span className="text-sunset-orange">왜일까요?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col group"
                        >
                            <div className="h-48 bg-white/5 flex items-center justify-center text-gray-700 text-xs italic">
                                {/* 스페이스 홀더: 유저가 직접 사진 삽입 예정 */}
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
