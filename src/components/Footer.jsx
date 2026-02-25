import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-br from-[#1c048c] via-[#2f09a3] to-[#4b11c5] text-white py-16 px-8 mt-auto rounded-t-[3rem] w-[100vw] relative left-1/2 -translate-x-1/2">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold tracking-tight block mb-6 text-white text-center">BETONMUSIC</span>
                    <div className="flex gap-4 justify-center">
                        <a href="https://t.me/best_academ_krd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 overflow-hidden flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <img src="/icons/tg-1.png" alt="Telegram" className="w-full h-full object-contain" />
                        </a>
                        <a href="https://vk.ru/clocksoundrecord" target="_blank" rel="noopener noreferrer" className="w-10 h-10 overflow-hidden flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <img src="/icons/vk-1.png" alt="VK" className="w-full h-full object-contain" />
                        </a>
                        <a href="https://www.instagram.com/beton_label_krd?igsh=MTNsZm00Mnd5ZjY1dg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 overflow-hidden flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <img src="/icons/inst-1.png" alt="Instagram" className="w-full h-full object-contain" />
                        </a>
                        <a href="https://www.tiktok.com/@beton_krd?_r=1&_t=ZN-91X3bdiAHxu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 overflow-hidden flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <img src="/icons/TT-1.png" alt="TikTok" className="w-full h-full object-contain" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
