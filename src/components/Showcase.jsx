import React from 'react';

const showcaseItems = [
    {
        tag: 'ЗВУКОРЕЖИССЁР',
        title: 'Станислав',
        image: '/team/IMG_1020.jpg',
        color: 'from-orange-500/20'
    },
    {
        tag: 'АРАНЖИРОВЩИК',
        title: 'Илья',
        image: '/team/IMG_1021.jpg',
        color: 'from-cyan-500/20'
    },
    {
        tag: 'ГОСТРАЙТЕР',
        title: 'Андрей',
        image: '/team/IMG_1022.jpg',
        color: 'from-purple-500/20'
    },
    {
        tag: 'ГОСТРАЙТЕР',
        title: 'Даниил',
        image: '/team/IMG_1023.jpg',
        color: 'from-pink-500/20'
    },
    {
        tag: 'СТУДИЯ',
        title: 'Студия',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'from-blue-500/20'
    },
    {
        tag: 'СТУДИЯ',
        title: 'Студия',
        image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'from-emerald-500/20'
    },
    {
        tag: 'СТУДИЯ',
        title: 'Студия',
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'from-yellow-500/20'
    },
    {
        tag: 'СТУДИЯ',
        title: 'Студия',
        image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5646c?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'from-red-500/20'
    }
];

const Showcase = () => {
    return (
        <section id="team" className="w-full flex justify-center py-24 px-4 relative">
            <div className="max-w-5xl w-full flex flex-col items-center">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Команда BETON<span className="text-accent">MUSIC</span>
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto text-sm">
                        Познакомьтесь с нашими профессионалами
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full mb-12 px-2 md:px-0">
                    {showcaseItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0a0518] hover:border-accent/40 transition-colors h-[200px] md:h-[280px]"
                        >
                            {/* Removed color gradient overlay */}

                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20 flex justify-between items-end">
                                <div>
                                    <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-0.5 block">{item.tag}</span>
                                    <h3 className="text-white font-bold text-sm md:text-xl w-full leading-tight">{item.title}</h3>
                                </div>
                            </div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Showcase;
