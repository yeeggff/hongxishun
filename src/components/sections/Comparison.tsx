export default function Comparison() {
    return (
        <section className="py-24 px-6 bg-black relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-blue/5 pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    왜 <span className="text-neon-blue">SIMVEX</span> 여야 할까요?
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 px-4 text-gray-400 font-medium">구분</th>
                                <th className="py-6 px-4 text-gray-400 font-medium text-center opacity-50">기존 인강</th>
                                <th className="py-6 px-4 text-neon-blue font-bold text-center text-xl bg-neon-blue/5 rounded-t-xl">SIMVEX</th>
                                <th className="py-6 px-4 text-gray-400 font-medium text-center opacity-50">전문가용 SW (CATIA 등)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { label: "시각화 (Visualization)", lecture: "2D Flat", simvex: "3D Interactive", sw: "3D Complex" },
                                { label: "실습 환경 (Practice)", lecture: "None (Passive)", simvex: "Web Simulator", sw: "Install Required (Heavy)" },
                                { label: "가격 (Cost)", lecture: "$$ (Medium)", simvex: "Free (Beta)", sw: "$$$$ (High)" },
                                { label: "피드백 (Feedback)", lecture: "Delayed", simvex: "Real-time AI", sw: "None/Manual" },
                            ].map((row, idx) => (
                                <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-4 font-semibold text-white">{row.label}</td>
                                    <td className="py-6 px-4 text-center text-gray-500">{row.lecture}</td>
                                    <td className="py-6 px-4 text-center text-neon-blue font-bold bg-neon-blue/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                                        {row.simvex}
                                    </td>
                                    <td className="py-6 px-4 text-center text-gray-500">{row.sw}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
