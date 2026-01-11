import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!email || !name) {
            setMessage({ text: '이름과 이메일을 모두 입력해주세요.', type: 'error' });
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ text: '유효한 이메일 주소를 입력해주세요.', type: 'error' });
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('email_submissions')
                .insert([{ name, email }]);

            if (error) throw error;

            setMessage({ text: '사전 예약이 완료되었습니다!', type: 'success' });
            setName('');
            setEmail('');
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setMessage({
                text: '오류가 발생했습니다. 다시 시도해주세요.',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="email-input-section" className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">
                    이번 학기 성적, <br />
                    <span className="text-neon-blue">SIMVEX</span>로 바꿔보세요.
                </h2>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름 (Name)"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors text-white placeholder-gray-500"
                        disabled={loading}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 (Email)"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors text-white placeholder-gray-500"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-neon-blue hover:bg-blue-600 text-black font-bold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? '처리중...' : '사전 예약 신청하기'}
                    </button>
                    {message && (
                        <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {message.text}
                        </p>
                    )}
                </form>

                <p className="text-gray-500 text-sm">
                    © 2026 SIMVEX. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
