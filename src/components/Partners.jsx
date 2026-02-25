import React from 'react';
import { PlayCircle, ShieldCheck, Headphones } from 'lucide-react';

const Partners = () => {
    return (
        <section className="w-full flex justify-center mt-[-40px] relative z-20 px-4">
            <div className="flex items-center justify-start gap-8 md:gap-12 px-10 py-5 bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl w-full max-w-5xl overflow-hidden shadow-xl">

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 text-accent glow-box">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <div className="text-xs text-textMuted font-medium tracking-widest uppercase">Нам Доверяют</div>
                        <div className="text-2xl font-bold text-white tracking-tight">1,000+</div>
                    </div>
                </div>

                <div className="h-12 w-[2px] shrink-0 bg-white/30 hidden md:block"></div>

                <div className="flex-1 flex items-center justify-center text-white/70">
                    <div className="font-bold text-lg tracking-tight flex items-center gap-2 text-center md:text-left">
                        <Headphones size={20} className="shrink-0" />
                        <span className="md:hidden">BetonMusic</span>
                        <span className="hidden md:inline">BetonMusic - лучшая студия звукозаписи в Краснодаре</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Partners;
