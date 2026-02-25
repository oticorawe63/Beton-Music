import React from 'react';
import { MicVocal, RadioTower, Speaker, SlidersHorizontal, AudioWaveform, Piano, PenTool, Key, Podcast } from 'lucide-react';

const services = [
    {
        icon: <MicVocal size={28} />,
        title: 'Запись трека',
        description: '1 500 ₽ / час'
    },
    {
        icon: <SlidersHorizontal size={28} />,
        title: 'Сведение и мастеринг',
        description: '3 000 ₽'
    },
    {
        icon: <Piano size={28} />,
        title: 'Создание аранжировки',
        description: 'от 7 000 ₽'
    },
    {
        icon: <PenTool size={28} />,
        title: 'Написание текста',
        description: 'от 10 000 ₽'
    },
    {
        icon: <Key size={28} />,
        title: 'Трек под ключ',
        description: 'от 25 000 ₽'
    },
    {
        icon: <Podcast size={28} />,
        title: 'Полное продюссирование',
        description: 'Цена договорная'
    }
];

const Services = () => {
    return (
        <section id="services" className="w-full flex justify-center py-24 pt-32 px-4">
            <div className="max-w-4xl w-full flex flex-col items-center">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Наши услуги
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto text-base">
                        Поможем реализовать вашу идею <br />
                        или придумаем ее за вас
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full px-2 md:px-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col h-full p-4 md:p-6 bg-[#0a0518] rounded-2xl transition-all duration-150 relative overflow-hidden ring-1 ring-inset ring-white/5 hover:ring-white"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1c048c] via-[#2f09a3] to-[#4b11c5] opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0 pointer-events-none"></div>

                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 relative z-10">
                                {service.icon}
                            </div>

                            <h3 className="text-white font-bold text-sm md:text-lg mb-2 relative z-10">{service.title}</h3>
                            <p className="text-textMuted text-xs md:text-sm leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
