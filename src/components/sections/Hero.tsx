import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 pt-20">

            {/* Background Aura Effects (Framer-like glows) */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-[100%] blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md">
                        Available soon for Windows 10/11
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                >
                    Be Like Engineer <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 animate-gradient-x">
                    </span>
                </motion.h1>

                {/* Sub Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    <br className="md:hidden" />
                    노트북 속 나만의 작은 연구실
                    <br />
                    공대생을 위한 엔지니어링 통합 SW
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
                >
                    <button
                        onClick={() => document.getElementById('email-input-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="h-10 px-6 text-sm rounded-lg h-10 px-6 md:h-12 md:px-8 md:text-lg md:rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        무료 베타 신청
                    </button>
                    <button onClick={() => {
                        const element = document.getElementById('features');
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }} className="h-10 px-4 text-sm rounded-lg h-10 px-4 md:h-12 md:px-6 md:text-lg md:rounded-xl bg-white/10 border border-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-md">
                        기능 자세히 보기
                    </button>
                </motion.div>
            </div>

            {/* Visual Placeholder (YouTube Video Embed) */}
            <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                className="mt-25 w-full max-w-6xl perspective-1000"
            >
                {/* 비디오 컨테이너 */}
                <div className="relative aspect-video bg-gray-900 rounded-t-2xl border border-white/10 border-b-0 overflow-hidden shadow-2xl backdrop-blur-sm group">

                    <iframe
                        className="w-full h-full object-cover"
                        // 👇 아래 주소의 'VIDEO_ID' 부분을 실제 유튜브 영상 ID로 바꾸세요
                        src="https://www.youtube.com/embed/RTdqe6gIxQM"
                        title="SIMVEX Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* (선택 사항) 비디오 위에 얇은 그라데이션을 덮어 더 고급스럽게 만들기 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </section>
    );
}
