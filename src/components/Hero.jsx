import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-40 pb-20 w-full flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh]"
        >

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    <span>Сделаем хит</span><br />
                    <span>уровня чартов Apple Music</span>
                </h1>

                <p className="text-lg text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
                    Запишем и сведем трек за 48 часов. Гарантируем попадание в вашу идею или вернем деньги.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <a
                        href="#booking"
                        className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#1c048c] via-[#2f09a3] to-[#4b11c5] rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 transform-gpu subpixel-antialiased inline-block"
                    >
                        Связаться с нами
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
