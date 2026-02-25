import React, { useRef, useEffect } from 'react';

const testimonials = [
    {
        name: 'Мария',
        role: 'Продюсер',
        company: '',
        text: 'Записывала подарок мужу на юбилей. Петь не умею совсем, но со мной работали как с профи. Никаких смешков, только поддержка. Спасибо за терпение!',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b'
    },
    {
        name: 'Алексей',
        role: 'Независимый артист',
        company: '',
        text: 'Звукорежиссер очень тактичный, помог с подачей в рэп-партax. Трек отдали через 2 дня, звук — жир',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
    },
    {
        name: 'Марк',
        role: 'A&R Менеджер',
        company: '',
        text: 'Нужен был NDA и трек в короткие сроки для крупного бренда. Ребята единственные, кто без вопросов подписал наши бумаги и сдал трек за ночь. Чисто, быстро, профессионально',
        avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d'
    },
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) {
            const timer = setTimeout(() => {
                const container = scrollRef.current;
                if (container && container.children.length > 1) {
                    const secondItem = container.children[1];
                    const scrollPos = secondItem.offsetLeft - (container.clientWidth / 2) + (secondItem.clientWidth / 2);
                    container.scrollLeft = scrollPos;
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <section id="reviews" className="w-full flex justify-center py-20 px-4 overflow-hidden">
            <div className="max-w-[1400px] w-full flex flex-col items-center">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Нам доверяют
                    </h2>
                </div>

                <div ref={scrollRef} className="flex justify-start md:justify-center items-stretch gap-4 w-full overflow-x-auto pb-8 snap-x hide-scrollbar px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col min-w-[300px] w-[300px] md:min-w-[340px] flex-shrink-0 bg-accent/10 border border-accent/20 rounded-2xl p-8 snap-center transition-all duration-700 cursor-pointer hover:bg-gradient-to-br hover:from-[#1c048c] hover:via-[#2f09a3] hover:to-[#4b11c5]"
                        >
                            <div className="mb-6 h-12 w-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale" />
                            </div>

                            <p className="text-white/80 text-sm leading-relaxed mb-8 italic flex-1 text-left">
                                "{t.text}"
                            </p>

                            <div className="shrink-0 mt-auto">
                                <div className="text-white font-bold">{t.name}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
