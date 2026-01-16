import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!email) {
            setMessage({ text: '이메일을 입력해주세요.', type: 'error' });
            setLoading(false);
            return;
        }

        // (기존 로직 동일)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ text: '유효한 이메일 주소를 입력해주세요.', type: 'error' });
            setLoading(false);
            return;
        }

        if (!supabase) {
            console.error('Supabase client is not initialized');
            setMessage({ text: '서비스 연결 오류가 발생했습니다.', type: 'error' });
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('email_submissions')
                .insert([{ email }]);

            if (error) throw error;
            setMessage({ text: '베타 테스터 신청이 완료되었습니다!', type: 'success' });
            setEmail('');
        } catch (error: any) {
            console.error(error);
            setMessage({ text: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="email-input-section" className="bg-black py-32 px-6 border-t border-white/10 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600"> SIMVEX</span> <br />
                        나만의 작은 연구실
                    </h2>
                    <p className="text-sm md:text-xl text-gray-500">
                        사전 예약하고, 대학생 1년 무료 요금제 혜택을 받아보세요.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-md mx-auto space-y-3 md:space-y-4"
                >
                    <div className="space-y-2 md:space-y-3">
                        {/* 이메일 입력창 */}
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일 (Email)" // <--- 여기도 있습니다!
                                className="w-full h-12 md:h-14 px-5 md:px-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder-gray-500 text-base md:text-lg"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* 제출 버튼 */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 md:h-14 bg-white text-black font-bold text-base md:text-lg rounded-xl md:rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" /> 처리중...
                            </>
                        ) : (
                            <>
                                사전 예약 신청하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>

                    {message && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-sm font-medium ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                        >
                            {message.text}
                        </motion.p>
                    )}
                </motion.form>

                <div className="pt-20 border-t border-white/5 mt-20 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
                    <p>© 2026 SIMVEX. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
