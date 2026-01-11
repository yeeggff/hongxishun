import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-black overflow-hidden px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 w-full max-w-7xl mx-auto z-10">

                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-8 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-semibold border border-neon-blue/20">
                            For Engineering Students
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-bold leading-tight break-keep"
                    >
                        <span className="whitespace-nowrap">4대 역학 A+ 치트키,</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyan-400">
                            이제 3D로 직접
                        </span><br />
                        <span className="whitespace-nowrap">돌려보며 이해하세요.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-lg"
                    >
                        복잡한 기계와 물리 현상, 책으로만 상상하지 마세요.<br />
                        SIMVEX로 직접 분해하고 시뮬레이션 하세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button
                            onClick={() => {
                                const emailSection = document.getElementById('email-input-section');
                                if (emailSection) {
                                    emailSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-neon-blue hover:bg-blue-600 text-black, font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] text-lg cursor-pointer transform hover:scale-105 active:scale-95"
                        >
                            베타 테스터 신청하고 A+ 받기
                        </button>
                    </motion.div>
                </div>

                {/* Right Content (3D/Floating Effect) */}
                <div className="relative h-[500px] flex items-center justify-center perspective-1000 z-10">

                    {/* Floating Elements Container */}
                    <FloatingElements />

                    {/* Center visual (Abstract Engine/Core) */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-20 w-64 h-64 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 bg-neon-blue/20 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />

                        {/* Center Gear (Main) */}
                        <div className="relative w-48 h-48 z-30">
                            <img src="/assets/gear.png" alt="Main Gear" className="w-full h-full object-contain animate-[spin_20s_linear_infinite]" />
                        </div>

                        <div className="absolute text-white font-bold text-2xl tracking-widest z-40 drop-shadow-lg mix-blend-overlay">SIMVEX</div>
                    </motion.div>

                </div>

            </div>

            {/* Background Gradient Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] -z-0 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sunset-orange/10 rounded-full blur-[120px] -z-0 pointer-events-none mix-blend-screen" />
        </section>
    );
}

function FloatingElements() {
    const parts = [
        { src: "/assets/gear.png", x: -160, y: -120, scale: 0.6, delay: 0, duration: 5, rotate: 360 },
        { src: "/assets/bolt.png", x: 180, y: -90, scale: 0.5, delay: 1, duration: 6, rotate: -45 },
        { src: "/assets/nut.png", x: -120, y: 140, scale: 0.4, delay: 0.5, duration: 5.5, rotate: 180 },
        { src: "/assets/bolt.png", x: 140, y: 120, scale: 0.3, delay: 1.5, duration: 7, rotate: 90 },
        { src: "/assets/gear.png", x: 0, y: -200, scale: 0.4, delay: 2, duration: 6.5, rotate: -360 },
    ];

    return (
        <>
            {parts.map((part, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10 pointer-events-none"
                    initial={{ x: part.x, y: part.y, scale: part.scale, opacity: 0 }}
                    animate={{
                        y: [part.y, part.y - 40, part.y],
                        opacity: 1
                    }}
                    transition={{
                        y: {
                            duration: part.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        opacity: { duration: 1, delay: part.delay }
                    }}
                >
                    <motion.img
                        src={part.src}
                        alt="part"
                        className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        animate={{ rotate: part.rotate }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            ))}
        </>
    );
}
