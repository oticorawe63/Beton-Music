import React from 'react';
import { Disc3 } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0a0518]/80 backdrop-blur-md border-b border-white/5">
            <div className="flex flex-1 items-center gap-6">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">BETON<span className="text-accent">MUSIC</span></span>
                </div>
                <span className="hidden lg:block text-sm font-medium text-textMuted whitespace-nowrap">ул. Восточно-Кругликовская, 72</span>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                {[
                    { id: 'home', label: 'Главная' },
                    { id: 'services', label: 'Услуги' },
                    { id: 'team', label: 'Команда' },
                    { id: 'reviews', label: 'Отзывы' },
                    { id: 'booking', label: 'Записаться' }
                ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-textMuted hover:text-white transition-colors whitespace-nowrap">
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="flex flex-1 justify-end items-center gap-4">
                <span className="lg:hidden text-xs sm:text-sm font-medium text-textMuted text-right leading-tight max-w-[130px] break-words">ул. Восточно-Кругликовская, 72</span>
                <div className="hidden sm:flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
                    <Disc3 className="text-accent animate-[spin_4s_linear_infinite]" size={20} />
                    <span className="font-bold tracking-widest text-sm">BETON<span className="text-accent">MUSIC</span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
