import React from 'react';

const Cta = () => {
    return (
        <section id="booking" className="w-full flex justify-center py-16 px-4 mb-20 relative px-4">
            <div className="max-w-4xl w-full relative">

                <div className="relative border border-white/10 bg-gradient-to-br from-[#1c048c] via-[#2f09a3] to-[#4b11c5] backdrop-blur-md rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center overflow-hidden">

                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 relative z-10 w-full md:w-3/4">
                        Связаться с нами
                    </h2>
                    <p className="text-white/80 max-w-lg mx-auto mb-10 relative z-10 text-sm">
                        Получите план записи и расчет бюджета сегодня
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative z-10 w-full">
                        <a
                            href="https://t.me/stanislav_abadonov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 text-sm font-bold text-white bg-[#10042c] rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-wide transform-gpu subpixel-antialiased text-center w-full sm:w-[200px]"
                        >
                            Telegram
                        </a>
                        <a
                            href="https://vk.ru/stas_clocksound"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 text-sm font-bold text-white bg-[#10042c] rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-wide transform-gpu subpixel-antialiased text-center w-full sm:w-[200px]"
                        >
                            VKontakte
                        </a>
                        <a
                            href="https://www.instagram.com/palmer__omerta?igsh=MXR4bmVzcWRveW0zbQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 text-sm font-bold text-white bg-[#10042c] rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-wide transform-gpu subpixel-antialiased text-center w-full sm:w-[200px]"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
